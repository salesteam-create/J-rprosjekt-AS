# Jærprosjekt AS – landing page prototype

Static one-page prototype (HTML, CSS, vanilla JS). No build step.

- Open `index.html` locally, or serve the folder: `python3 -m http.server`
- Hosted with GitHub Pages from the repository root.

## Before showing the client

- Contact details (phone 51 00 00 00, post@jarpro.no, opening hours) and the three reviews are made-up examples. The reviews are labelled as examples on the page. Replace with real details and real reviews before launch.
- Photos are a mix of Unsplash stock and reference images supplied by the sales team (services image and project tiles p1, p3, p5, p6). Some reference photos may belong to other builders: do not publish them without permission. Replace everything with the client's own material before launch.
- The hero video (`assets/video/hero.*`) and About video (`assets/video/om-oss.*`) are AI-generated with Gemini, cropped slightly to remove the corner mark. Replace them with real footage before launch.
- Logo files in `assets/logo/` are cut from a PNG. Ask the client for a vector version (SVG, AI or PDF).
- The map is a Google Maps embed of Somaveien 2, 4313 Sandnes.
- Tak and Terrasse service cards are hidden. Set `VIS_UBEKREFTEDE_TJENESTER = true` in `js/main.js` once confirmed.
- Mesterhus links point to mesterhus.no until the member page URL is confirmed.
- Links like `/rehabilitering` and `/sandnes` represent future pages and show a notice instead of navigating.
- The page has `noindex` so the prototype is not indexed. Remove it at launch.
