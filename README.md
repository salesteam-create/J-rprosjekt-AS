# Jærprosjekt AS – landing page prototype

Static one-page prototype (HTML, CSS, vanilla JS). No build step.

- Open `index.html` locally, or serve the folder: `python3 -m http.server`
- Hosted with GitHub Pages from the repository root.

## Before showing the client

- Text in `[brackets]` is placeholder content (phone, email, opening hours, reviews, team photo).
- Photos are stock images from Unsplash. Replace them with the client's own material.
- The About video (`assets/video/om-oss.*`) is AI-generated with Gemini and labelled as an illustration. Replace it with real footage before launch.
- Logo files in `assets/logo/` are cut from a PNG. Ask the client for a vector version (SVG, AI or PDF).
- The map is a Google Maps embed of Somaveien 2, 4313 Sandnes.
- Tak and Terrasse service cards are hidden. Set `VIS_UBEKREFTEDE_TJENESTER = true` in `js/main.js` once confirmed.
- Mesterhus links point to mesterhus.no until the member page URL is confirmed.
- Links like `/rehabilitering` and `/sandnes` represent future pages and show a notice instead of navigating.
- The page has `noindex` so the prototype is not indexed. Remove it at launch.
