# -*- coding: utf-8 -*-
# Usage:
#   pip install -r requirements.txt
#   python export_wttj_assets.py "Etude de cas.pdf" "Presentation_Cas_WTTJ_Notion.pdf" ./public/WTTJ

import sys, os, json
from PIL import Image
import fitz  # PyMuPDF

def ensure_dir(p):
    os.makedirs(p, exist_ok=True)

def render_pages(pdf_path, picks, out_dir, prefix):
    doc = fitz.open(pdf_path)
    results = {}
    for label, page_num in picks.items():
        # page_num is 1-indexed
        i = page_num - 1
        page = doc[i]
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)  # 2x scale
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)

        # desktop (max width ~1600)
        desktop = img.copy()
        if desktop.width > 1600:
            ratio = 1600 / desktop.width
            desktop = desktop.resize((1600, int(desktop.height * ratio)), Image.Resampling.LANCZOS)
        desktop_name = f"{prefix}_{label}_desktop.png"
        desktop_path = os.path.join(out_dir, desktop_name)
        desktop.save(desktop_path, optimize=True)

        # mobile (max width ~800)
        mobile = img.copy()
        if mobile.width > 800:
            ratio = 800 / mobile.width
            mobile = mobile.resize((800, int(mobile.height * ratio)), Image.Resampling.LANCZOS)
        mobile_name = f"{prefix}_{label}_mobile.png"
        mobile_path = os.path.join(out_dir, mobile_name)
        mobile.save(mobile_path, optimize=True)

        results[label] = {"desktop": desktop_name, "mobile": mobile_name, "page": page_num}
        print(f"Saved: {desktop_name} / {mobile_name} (page {page_num})")
    doc.close()
    return results

def copy_extra_images(extras, out_dir):
    from shutil import copyfile
    results = {}
    for label, src in extras.items():
        ext = os.path.splitext(src)[1].lower()
        # Save as jpg for photos, png otherwise
        out_name_desktop = f"{label}_desktop.jpg" if ext in [".jpg", ".jpeg", ".png"] else f"{label}_desktop.png"
        out_name_mobile  = f"{label}_mobile.jpg" if ext in [".jpg", ".jpeg", ".png"] else f"{label}_mobile.png"
        # Open and optimize + resize
        img = Image.open(src).convert("RGB")
        d = img.copy()
        if d.width > 1600:
            r = 1600 / d.width
            d = d.resize((1600, int(d.height * r)), Image.Resampling.LANCZOS)
        d.save(os.path.join(out_dir, out_name_desktop), optimize=True, quality=85)

        m = img.copy()
        if m.width > 800:
            r = 800 / m.width
            m = m.resize((800, int(m.height * r)), Image.Resampling.LANCZOS)
        m.save(os.path.join(out_dir, out_name_mobile), optimize=True, quality=85)

        results[label] = {"desktop": out_name_desktop, "mobile": out_name_mobile}
        print(f"Saved extras: {out_name_desktop} / {out_name_mobile}")
    return results

def main():
    if len(sys.argv) < 4:
        print("Usage: python export_wttj_assets.py <Etude de cas.pdf> <Presentation_Cas_WTTJ_Notion.pdf> <out_dir>")
        sys.exit(1)

    pdf1 = sys.argv[1]  # Etude de cas.pdf
    pdf2 = sys.argv[2]  # Presentation_Cas_WTTJ_Notion.pdf (non indispensable ici)
    out_dir = sys.argv[3]
    ensure_dir(out_dir)

    # 1) Pages clés du PDF "Etude de cas.pdf"
    # (ajuste les numéros si besoin en fonction de ton PDF)
    picks_etude = {
        "context": 6,    # stats contexte
        "jtbd": 18,      # verbatims / JTBD
        "pivot": 29,     # opportunity tree extrait pivot
        "rice": 31,      # RICE MVP
        "tests": 36,     # tests & feedback (option: 37)
        "risks": 39,     # risques
        "kpis": 41,      # KPIs / roadmap
        "conclusion": 45 # conclusion / ouverture
    }

    exported_etude = render_pages(pdf1, picks_etude, out_dir, "etude")

    # 2) Images supplémentaires (mets les bons chemins vers tes fichiers locaux)
    #    -> remplace les chemins ci-dessous par tes fichiers réels si tu les as localement
    extras = {}
    # Exemple:
    # extras = {
    #   "maquette_onboarding": "/chemin/vers/Maquette WTTJ section 2 onboarding.png",
    #   "workflow_userflow": "/chemin/vers/Workflow WTTJ - User Flow (1).jpg",
    # }

    exported_extras = {}
    if extras:
        exported_extras = copy_extra_images(extras, out_dir)

    # 3) mapping.json (clé = ce que tu appelles depuis le code, valeur = nom de fichier dans /public/WTTJ)
    mapping = {
      "/public/WTTJ/context-desktop.png":     f"{'etude'}_context_desktop.png",
      "/public/WTTJ/context-mobile.png":      f"{'etude'}_context_mobile.png",
      "/public/WTTJ/jtbd-desktop.png":        f"{'etude'}_jtbd_desktop.png",
      "/public/WTTJ/jtbd-mobile.png":         f"{'etude'}_jtbd_mobile.png",
      "/public/WTTJ/pivot-desktop.png":       f"{'etude'}_pivot_desktop.png",
      "/public/WTTJ/pivot-mobile.png":        f"{'etude'}_pivot_mobile.png",
      "/public/WTTJ/rice-desktop.png":        f"{'etude'}_rice_desktop.png",
      "/public/WTTJ/rice-mobile.png":         f"{'etude'}_rice_mobile.png",
      "/public/WTTJ/tests-desktop.png":       f"{'etude'}_tests_desktop.png",
      "/public/WTTJ/tests-mobile.png":        f"{'etude'}_tests_mobile.png",
      "/public/WTTJ/kpis-desktop.png":        f"{'etude'}_kpis_desktop.png",
      "/public/WTTJ/kpis-mobile.png":         f"{'etude'}_kpis_mobile.png",
      "/public/WTTJ/risques-desktop.png":     f"{'etude'}_risks_desktop.png",
      "/public/WTTJ/risques-mobile.png":      f"{'etude'}_risks_mobile.png",
      "/public/WTTJ/conclusion-desktop.png":  f"{'etude'}_conclusion_desktop.png",
      "/public/WTTJ/conclusion-mobile.png":   f"{'etude'}_conclusion_mobile.png"
    }

    # Si tu as mis des "extras", décommente et adapte les lignes ci-dessous:
    # mapping["/public/WTTJ/proto-onboarding-desktop.jpg"] = exported_extras["maquette_onboarding"]["desktop"]
    # mapping["/public/WTTJ/proto-onboarding-mobile.jpg"]  = exported_extras["maquette_onboarding"]["mobile"]
    # mapping["/public/WTTJ/userflow-desktop.jpg"]         = exported_extras["workflow_userflow"]["desktop"]
    # mapping["/public/WTTJ/userflow-mobile.jpg"]          = exported_extras["workflow_userflow"]["mobile"]

    with open(os.path.join(out_dir, "mapping.json"), "w", encoding="utf-8") as f:
        json.dump(mapping, f, indent=2, ensure_ascii=False)

    print("\nDone. Files exported to:", out_dir)
    print("mapping.json written.")

if __name__ == "__main__":
    main()
