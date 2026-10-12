# Jærprosjekt AS – landing page prototype

Static one-page prototype (HTML, CSS, vanilla JS). No build step.

- Open `index.html` locally, or serve the folder: `python3 -m http.server`
- Hosted with GitHub Pages from the repository root.

## Before showing the client

- Text in `[brackets]` is placeholder content (phone, email, opening hours, reviews, team photo).
- Photos are stock images from Unsplash, and the hero video is hotlinked from Pexels (video 11062231). Replace them with the client's own material.
- Tak and Terrasse service cards are hidden. Set `VIS_UBEKREFTEDE_TJENESTER = true` in `js/main.js` once confirmed.
- Mesterhus links point to mesterhus.no until the member page URL is confirmed.
- Links like `/rehabilitering` and `/sandnes` represent future pages and show a notice instead of navigating.
- The page has `noindex` so the prototype is not indexed. Remove it at launch.
