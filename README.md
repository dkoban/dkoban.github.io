# GEN Donald R. Keith Memorial Capstone Conference site

Static site (plain HTML/CSS/JS, no build step). Open `index.html` directly in a browser to preview.

## What's real vs. placeholder

Most content on this site is real, pulled from files provided for AY27: the submission timeline, paper deliverables, formatting requirements, conference photos, SDAC logo/branding, and the 2026 proceedings link.

All placeholders have been filled in, including the CMT link, venue (Jefferson Hall/Mahan Hall/Eisenhower Hall), venue map, day-of schedule times, and the conference chair's contact email/phone (formatting section + footer).

To double-check nothing new has slipped in, search for leftover placeholders with:

```
grep -rn "TODO:" index.html
```

## Paper templates

Two templates live in `files/` and both carry the same front matter, including the required **AI Use Disclosure** statement:

- `GDRKMCC-27_Paper_Template.docx` — the official Word template.
- `latex-template/` (`main.tex` + `references.bib`) — a LaTeX version that mirrors the Word formatting (Times, 10pt body, 0.75/0.75/1.25/0.75" margins, numbered 11pt headings, APA references via `biblatex-apa`). Compile with pdfLaTeX + Biber.
- `GDRKMCC-27_LaTeX_Template.zip` — the zipped copy of `latex-template/` that the site links to. **Rebuild it whenever you edit `main.tex` or `references.bib`:**

  ```
  cd files/latex-template && rm -f ../GDRKMCC-27_LaTeX_Template.zip && zip -X ../GDRKMCC-27_LaTeX_Template.zip main.tex references.bib
  ```

The site's "Open LaTeX Template in Overleaf" button uses Overleaf's open-in-Overleaf link (`https://www.overleaf.com/docs?snip_uri=<zip URL>`), so authors get their own copy of the template in Overleaf without you needing to own a gallery template. It points at the zip's URL on the live site, so it only works once the zip is published to `dkoban.github.io`.

## Generative AI policy

Every paper must include this statement directly after the Author Note:

> Generative AI tools were used to support the following activities: ________. The authors reviewed and verified all generated material, consulted the original sources, and accept responsibility for all claims, citations, analysis, and conclusions.

The conference chair screens submissions with [Pangram](https://www.pangram.com), and papers that show excessive reliance on generative AI for writing may be disqualified from best paper awards. This policy appears on the site (`#formatting`) and in both templates; keep all three in sync if the wording changes.

## Updating for next year

- Colors/fonts live in `css/styles.css` under `:root` — pulled from `SDAC_Branding_Guide_21.pdf` (gold `#D5BA8C`, gray `#B2B2B2`, black `#2D2A26`). Body font is Jost (free), substituting for the brand guide's licensed Termina/Brandon Grotesque.
- Photos live in `images/photos/` — swap in new ones each year as needed.
- The Word and LaTeX paper templates live in `files/`; update both, plus the on-page spec table in `index.html` (`#formatting`), if requirements change.
- Dates live in the `#dates` timeline in `index.html` — update each year's milestones there.

## Source materials (not part of the published site)

The original files you dropped in (`AY27 USMA DSE Capstone Kick-off.pptx`, both `Capstone Conference Photos *.docx` files, `SDAC Information Sheet_AY27.pptx`, `SDAC_Branding_Guide_21.pdf`, `Overleaf_LaTex_ConferencePaperTemplate.pdf`, and the `Web/` logo folder) are listed in `.gitignore` and won't be committed. Two reasons: the kickoff deck is 500+ MB (GitHub would reject the push), and several of these files contain internal course logistics (team room assignments, honors roster) that shouldn't be in a public repo. The actual content extracted from them already lives in the site (photos in `images/photos/`, logos in `images/logo/`, template in `files/`).

## Publishing to dkoban.github.io

This folder is meant to replace the content of the existing `dkoban.github.io` GitHub Pages repo (same repo, updated in place each year). To publish:

```
git init
git add .
git commit -m "AY27 capstone conference site"
git remote add origin git@github.com:dkoban/dkoban.github.io.git
git push origin main --force-with-lease   # only if this replaces prior unrelated history
```

Review the site locally and confirm you're ready before pushing — this overwrites the live public site.
