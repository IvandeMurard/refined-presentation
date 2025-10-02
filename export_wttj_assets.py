- name: Export visuals
  run: |
    python - << 'PY'
    import os, json, glob
    from PIL import Image
    import fitz

    def pick(patterns):
        for p in patterns:
            hits = glob.glob(p, recursive=True)
            if hits: 
                print(f"[INFO] Using PDF: {hits[0]}")
                return hits[0]
        raise FileNotFoundError(f"Not found: {patterns}")

    # 1) Localiser les PDF (tolérant au nom/chemin)
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

    def save_pair(img, base, out_dir):
        # desktop
        d = img.copy()
        if d.width > 1600:
            r = 1600/d.width
            d = d.resize((1600, int(d.height*r)), Image.Resampling.LANCZOS)
        d.save(os.path.join(out_dir, f"{base}_desktop.png"), optimize=True)
        # mobile
        m = img.copy()
        if m.width > 800:
            r = 800/m.width
            m = m.resize((800, int(m.height*r)), Image.Resampling.LANCZOS)
        m.save(os.path.join(out_dir, f"{base}_mobile.png"), optimize=True)

    def render_pages(pdf_path, picks, prefix):
        doc = fitz.open(pdf_path)
        n = doc.page_count
        print(f"[INFO] {pdf_path} -> {n} pages")
        exported = {}
        for label, desired in picks.items():
            if desired < 1 or desired > n:
                print(f"[WARN] '{label}' requested page {desired} out of 1..{n} -> skipping")
                continue
            i = desired - 1  # 0-index
            page = doc[i]
            pix = page.get_pixmap(matrix=fitz.Matrix(2,2), alpha=False)
            img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
            base = f"{prefix}_{label}"
            save_pair(img, base, OUT)
            exported[label] = {
              "desktop": f"{base}_desktop.png",
              "mobile":  f"{base}_mobile.png",
              "page": desired
            }
            print(f"[OK] {label}: page {desired} -> {base}_desktop.png / {base}_mobile.png")
        doc.close()
        return exported

    # 2) Sélection cible (si une page n'existe pas, elle sera ignorée proprement)
    picks1 = {
      "context":    6,
      "jtbd":       18,
      "pivot":      29,
      "rice":       31,
      "tests":      36,
      "risks":      39,
      "kpis":       41,
      "conclusion": 45
    }

    exported1 = render_pages(pdf1, picks1, "etude")

    # 3) mapping.json minimal (seulement ce qui a été exporté)
    #    -> tes composants peuvent appeler /public/WTTJ/<clé> et on résout vers le fichier généré
    mapping = {}
    key_map = {
      "context":    ("/public/WTTJ/context-desktop.png",    "/public/WTTJ/context-mobile.png"),
      "jtbd":       ("/public/WTTJ/jtbd-desktop.png",       "/public/WTTJ/jtbd-mobile.png"),
      "pivot":      ("/public/WTTJ/pivot-desktop.png",      "/public/WTTJ/pivot-mobile.png"),
      "rice":       ("/public/WTTJ/rice-desktop.png",       "/public/WTTJ/rice-mobile.png"),
      "tests":      ("/public/WTTJ/tests-desktop.png",      "/public/WTTJ/tests-mobile.png"),
      "kpis":       ("/public/WTTJ/kpis-desktop.png",       "/public/WTTJ/kpis-mobile.png"),
      "risks":      ("/public/WTTJ/risques-desktop.png",    "/public/WTTJ/risques-mobile.png"),
      "conclusion": ("/public/WTTJ/conclusion-desktop.png", "/public/WTTJ/conclusion-mobile.png"),
    }
    for label, paths in exported1.items():
      kdesk, kmob = key_map.get(label, (None,None))
      if kdesk and kmob:
        mapping[kdesk] = paths["desktop"]
        mapping[kmob]  = paths["mobile"]

    with open(os.path.join(OUT, "mapping.json"), "w", encoding="utf-8") as f:
      json.dump(mapping, f, indent=2, ensure_ascii=False)

    with open(os.path.join(OUT, "manifest.json"), "w", encoding="utf-8") as f:
      json.dump({"exported": exported1}, f, indent=2, ensure_ascii=False)

    print("[DONE] Files in public/WTTJ")
    PY
