# Portfolio — Collin Agaba Raymund

Personal portfolio site for **Collin Agaba Raymund**, Software Engineering student at the **University of Dodoma (UDOM)**. It highlights career objectives, education (including coursework), technical skills, experience, open-source projects, leadership, and contact details.

## Live preview

Open `index.html` in a browser, or serve the folder locally:

```bash
# Python 3
python -m http.server 8080
```

Then visit `http://127.0.0.1:8080/`.

## Tech stack

- Static **HTML**, **CSS**, and a small amount of **JavaScript**
- No build step or framework required — easy to host on GitHub Pages, Netlify, Vercel (static), or any static file host

## Features

- Responsive layout and mobile navigation
- Scroll-based section reveals and subtle background motion (respects `prefers-reduced-motion`)
- Sticky header with scroll state
- Links to featured work:
  - [university_chatbot](https://github.com/The-Agaba/university_chatbot) — FastAPI university services chatbot
  - [marketplace](https://github.com/The-Agaba/marketplace) — Marketplace API for browsing products and contacting sellers
  - [cotronicstech9.com](https://cotronicstech9.com/) — Live deployment (Tronix IoT platform); add your public source repo URL in `index.html` when you want a direct “source code” link alongside the site

## Customization

1. **Profile photo** — Add an image file and an `<img>` in the hero section of `index.html`.
2. **IoT project repo** — If the Tronix IoT codebase has a public GitHub URL, add a second link next to “Visit site” in the projects section.
3. **Colors** — Edit CSS variables at the top of `styles.css` (`:root`).

## Files

| File         | Purpose                                      |
| ------------ | -------------------------------------------- |
| `index.html` | Structure and content                        |
| `styles.css` | Layout, theme, animations                    |
| `script.js`  | Menu toggle, header scroll, reveal observer |
| `README.md`  | This documentation                           |

## License

Content is personal to Collin Agaba Raymund. You may fork and adapt the **layout** for your own portfolio; replace all personal data and branding if you reuse it.
