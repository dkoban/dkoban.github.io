# GEN Donald R. Keith Memorial Capstone Conference site

Static site (plain HTML/CSS/JS, no build step). Open `index.html` directly in a browser to preview.

## What's real vs. placeholder

Most content on this site is real, pulled from files provided for AY27: the submission timeline, paper deliverables, formatting requirements, conference photos, SDAC logo/branding, and the 2026 proceedings link.

A few things are still placeholders because they weren't available yet:

- The **Microsoft CMT submission link** (hero and `#submit` section)
- The **exact venue name, address, and map** (`#venue` section)
- **Contact email/phone** for the conference chair (formatting section + footer)
- **Day-of schedule times** (`#schedule` section currently has `[TIME]`/`[BUILDING NAME]` tokens)

Find every remaining placeholder with:

```
grep -rn "TODO:\|\[" index.html
```

Replace the bracketed tokens and follow the `TODO:` comments, then remove the comment once done.

## Updating for next year

- Colors/fonts live in `css/styles.css` under `:root` — pulled from `SDAC_Branding_Guide_21.pdf` (gold `#D5BA8C`, gray `#B2B2B2`, black `#2D2A26`). Body font is Jost (free), substituting for the brand guide's licensed Termina/Brandon Grotesque.
- Photos live in `images/photos/` — swap in new ones each year as needed.
- The Word paper template lives in `files/`; update it and the on-page spec table in `index.html` (`#formatting`) if requirements change.
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
