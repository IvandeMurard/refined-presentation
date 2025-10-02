- name: Export visuals
  run: |
    python - << 'PY'
    import os, glob, json
    from PIL import Image
    import fitz

    def pick(patterns):
        for p in patterns:
            hits = glob.glob(p, recursive=True)
            if hits:
                print(f"[INFO] Using: {hits[0]}")
                return hits[0]
        raise FileNotFoundError(patterns)

    # Localise tes fichiers (tolérant au nom/dossier)
    pdf1 = pick([
      "tools/input/Etude de cas.pdf",
      "tools/Etude de cas.pdf",
      "tools/input/etude_de_cas.pdf",
      "tools/etude_de_cas.pdf"
    ])
    pdf2 = pick([
      "tools/input/Presentation_Cas_WTTJ_Notion.pdf",
      "tools/Presentation_Cas_WTTJ_Notion.pdf",
      "tools/input/presentation_cas_wttj_notion.pdf",
      "tools/presentation_cas_wttj_notion.pdf"
    ])

    OUT = "public/WTTJ"
    os.makedirs(OUT, exist_ok=True)

    def save_pair(img, base):
        # desktop ~1600px
        d = img.copy()
        if d.width > 1600:
            r = 1600 / d.width
            d = d.resize((1600, int(d.height*r)), Image.Resampling.LANCZOS)
        d.save(os.path.join(OUT, f"{base}_desktop.png"), optimize=True)
        # mobile ~800px
        m = img.copy()
        if m.width > 800:
            r = 800 / m.width
            m = m.resize((800, int(m.height*r)), Image.Resampling.LANCZOS)
        m.save(os.path.join(OUT, f"{base}_mobile.png"), optimize=True)

    def export_all_pages(pdf_path, prefix):
        doc = fitz.open(pdf_path)
        n = doc.page_count
        print(f"[INFO] {pdf_path} -> {n} pages")
        files = []
        for i in range(n):
            page = doc[i]
            pix = page.get_pixmap(matrix=fitz.Matrix(2,2), alpha=False)
            img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
            base = f"{prefix}_p{str(i+1).zfill(2)}"
            save_pair(img, base)
            files.append({"page": i+1, "desktop": f"{base}_desktop.png", "mobile": f"{base}_mobile.png"})
        doc.close()
        return files

    etude = export_all_pages(pdf1, "etude")
    notion = export_all_pages(pdf2, "notion")

    # Manifest complet (aucun risque d'index)
    manifest = {"etude": etude, "notion": notion}
    with open(os.path.join(OUT, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    # Mapping minimal (pointe vers des pages "raisonnables" si elles existent)
    def pick_or_fallback(label_pages):
        for label, pages in label_pages.items():
            chosen = None
            for p in pages:
                hit = next((x for x in etude if x["page"] == p), None)
                if hit: chosen = hit; break
            if not chosen and etude:
                # fallback: première page
                chosen = etude[0]
            yield label, chosen

    label_pages = {
      "context":    [6,5,4],
      "jtbd":       [18,17,16],
      "pivot":      [29,28,27],
      "rice":       [31,30,32],
      "tests":      [36,35,34],
      "kpis":       [41,40,42],
      "risks":      [39,38,37],
      "conclusion": [45,44,43]
    }

    mapping = {}
    for label, hit in pick_or_fallback(label_pages):
      if not hit: continue
      mapping[f"/public/WTTJ/{label}-desktop.png"] = hit["desktop"]
      mapping[f"/public/WTTJ/{label}-mobile.png"]  = hit["mobile"]

    with open(os.path.join(OUT, "mapping.json"), "w", encoding="utf-8") as f:
        json.dump(mapping, f, indent=2, ensure_ascii=False)

    print("[DONE] Exported all pages → public/WTTJ")
    PY
