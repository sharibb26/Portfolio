# Sharib Ahmad — Portfolio

A personal portfolio website for Sharib Ahmad (Electronics & Telecommunication Engineering),
positioned for Electronics Hardware Developer / Embedded Engineer roles. Built with React, Vite,
and Tailwind CSS. All content is sourced directly from the uploaded resume — nothing has been
invented or exaggerated.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Unzip the project, then move into the folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`) in your browser.

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files land in `dist/` — you can deploy that folder to any static host
(Vercel, Netlify, GitHub Pages, etc.).

## Adding your resume PDF

The "Download Resume" buttons link to `/resume.pdf`. Add your actual resume file to the
`public/` folder and name it `resume.pdf` (replacing the placeholder note there) — it will
then be downloadable directly from the site.

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf        ← replace with your real resume
├── src/
│   ├── components/        (Navbar, Hero, About, Skills, Projects, Experience,
│   │                        Certifications, Leadership, Education, Contact, Footer)
│   ├── data.js            (all resume-sourced content in one place — edit here)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
└── package.json
```

## Notes

- No GitHub/demo links are included on project cards since none were listed on the resume —
  each shows a "Source — coming soon" placeholder instead of a fake link. Once you have real
  repos, add `link` fields to the relevant project objects in `src/data.js` and wire up a link.
- No LinkedIn/GitHub social buttons are shown for the same reason — add them in
  `src/components/Contact.jsx` once you have real profile URLs.
- All copy in `src/data.js` is written to reflect exactly what's on the resume; edit it there
  if your resume changes.
