- name: Show workflow snippet
  run: |
    echo "Workflow revision OK"

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
        d = img.copy()
        if d.width > 1600:
            r = 1600/d.width
            d = d.resize((1600, int(d.height*r)), Image.Resampling.LANCZOS)
        d.save(os.path.join(OUT, f"{base}_desktop.png"), optimize=True)

        m = img.copy()
        if m.width > 800:
            r = 800/m.width
            m = m.resize((800, int(m.height*r)), Image.Resampling.LANCZOS)
        m.save(os.path.join(OUT, f"{base}_mobile.png"), optimize=True)

    def export_all(pdf_path, prefix):
        doc = fitz.open(pdf_path)
        n = doc.page_count
        print(f"[INFO] {pdf_path} -> {n} pages")
        files = []
        for i in range(n):
            page = doc[i]
            pix = page.get_pixmap(matrix=fitz.Matrix(2,2), alpha=False)
            from PIL import Image as PILImage
            img = PILImage.frombytes("RGB", [pix.width, pix.height], pix.samples)
            base = f"{prefix}_p{str(i+1).zfill(2)}"
            save_pair(img, base)
            files.append({"page": i+1, "desktop": f"{base}_desktop.png", "mobile": f"{base}_mobile.png"})
        doc.close()
        return files

    etude = export_all(pdf1, "etude")
    notion = export_all(pdf2, "notion")

    with open(os.path.join(OUT, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump({"etude": etude, "notion": notion}, f, indent=2, ensure_ascii=False)

    # mapping minimal: pointe vers quelques labels en prenant la page demandée si elle existe, sinon p01
    def first_with_page(files, wanted):
        s = {x["page"]: x for x in files}
        for p in wanted:
            if p in s: return s[p]
        return files[0] if files else None

    mapping = {}
    labels = {
      "context":    [6,5,4],
      "jtbd":       [18,17,16],
      "pivot":      [29,28,27],
      "rice":       [31,30,32],
      "tests":      [36,35,34],
      "kpis":       [41,40,42],
      "risks":      [39,38,37],
      "conclusion": [45,44,43]
    }
    for label, wanted in labels.items():
      hit = first_with_page(etude, wanted)
      if hit:
        mapping[f"/public/WTTJ/{label}-desktop.png"] = hit["desktop"]
        mapping[f"/public/WTTJ/{label}-mobile.png"]  = hit["mobile"]

    with open(os.path.join(OUT, "mapping.json"), "w", encoding="utf-8") as f:
        json.dump(mapping, f, indent=2, ensure_ascii=False)

    print("[DONE] Exported all pages to public/WTTJ")
    PY
