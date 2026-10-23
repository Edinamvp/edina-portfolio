# Edina — Portfolio

A React + Vite portfolio site. Peony pink, cream, and espresso brown, with a
scroll-reveal experience and a light/dark toggle.

## File structure

```
edina-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── projects/          ← put project screenshots here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── ThemeToggle.jsx
    │   ├── FolderButton.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Learning.jsx
    │   ├── Projects.jsx
    │   ├── ProjectCard.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    ├── data/
    │   ├── skills.js       ← edit this to add/remove skills
    │   └── projects.js     ← edit this to add new projects
    ├── hooks/
    │   ├── useScrollReveal.js
    │   └── useTheme.js
    └── styles/
        ├── index.css        ← colors, fonts, global rules
        └── *.css             (one file per component)
```

## Running it locally

You'll need [Node.js](https://nodejs.org) installed (version 18 or newer).

1. Unzip this folder wherever you keep your projects.
2. Open a terminal in the `edina-portfolio` folder.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
5. Open the URL it prints (usually `http://localhost:5173`) in your browser.

To build the production version (the files you'd actually deploy, e.g. to
Vercel, Netlify, or GitHub Pages):
```
npm run build
```
This creates a `dist/` folder with the finished static site.

## Things to personalize before you publish

- **`src/components/Footer.jsx`** — replace the `href="#"` placeholders with
  your real GitHub and LinkedIn URLs.
- **`src/data/projects.js`** — add `liveUrl` / `githubUrl` for the BMW
  project once they're live, and drop new projects into the array as you
  build them (there's an example commented out at the bottom of the file).
- **`public/projects/`** — put a screenshot of the BMW site here (e.g.
  `bmw-preview.jpg`) and set `image: '/projects/bmw-preview.jpg'` in
  `projects.js`. Until you do, a stylized placeholder is shown instead.
- **Contact email** — already wired to `iljaziedina@gmail.com` via
  `mailto:` in both `Contact.jsx` and `Footer.jsx`. The form has no backend;
  submitting it opens the visitor's own email app with the message
  pre-filled.

## Notes on how it's built

- **Theme**: `useTheme.js` stores light/dark in `localStorage` and toggles a
  `data-theme="dark"` attribute on `<html>`; all colors are CSS variables
  defined in `src/styles/index.css`, so components never hardcode colors.
- **Scroll reveal**: `useScrollReveal.js` is a small IntersectionObserver
  hook. Any element gets the fade/rise effect by attaching the returned
  `ref` and adding the `reveal` class (see any component for examples).
  It respects `prefers-reduced-motion` automatically.
- **No fake content**: the projects list only has the BMW site in it on
  purpose — add real ones as you build them, using the same shape.
