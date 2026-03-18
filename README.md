# Charlot DEDJINOU Portfolio

This is my personal portfolio website, built with Vue 3 and Vite to showcase my background, skills, projects, certifications, awards, and contact information in a bilingual single-page experience.

Live site: https://charlot-dedjinou.vercel.app

## About the project

I built this portfolio as a space to present who I am, what I do, and the work I care about most. It brings together my experience in software engineering, web and mobile development, AI, IoT, and product building in a clean and interactive interface.

The website includes:

- English and French content
- dark and light theme support
- accent color customization
- animated section transitions with AOS
- searchable projects and certifications
- CV download and preview actions
- a data-driven structure that makes content updates easy

## Tech stack

- Vue 3
- Vite
- Vue Router
- Vuex
- Vue I18n
- Bootstrap 5
- Sass
- AOS

## Project structure

```text
.
|-- public/                Static public assets
|-- src/
|   |-- assets/            Images, icons, certificates, background assets
|   |-- components/        Portfolio sections and reusable UI components
|   |-- data/              Projects, skills, awards, education, experience, and more
|   |-- layout/            Helper functions and layout utilities
|   |-- router/            Vue Router configuration
|   |-- scss/              Global Sass styles
|   |-- store/             Vuex store for theme and accent color
|   |-- translate/         English and French translations
|   |-- views/             Page-level views
|   |-- App.vue
|   `-- main.js
|-- index.html
|-- package.json
|-- vite.config.js
`-- vercel.json
```

## Main sections

The homepage is assembled in [`src/views/HomeView.vue`](./src/views/HomeView.vue) from these sections:

- Home
- About
- Services
- Projects
- Awards
- Certifications
- Contact
- Footer

Most of the visible content is managed through dedicated data files instead of being hardcoded directly in the UI.

## Content organization

This portfolio is highly data-driven. The main content lives in:

- [`src/data/Projects.js`](./src/data/Projects.js)
- [`src/data/Skills.js`](./src/data/Skills.js)
- [`src/data/Experiences.js`](./src/data/Experiences.js)
- [`src/data/Educations.js`](./src/data/Educations.js)
- [`src/data/Certifications.js`](./src/data/Certifications.js)
- [`src/data/Awards.js`](./src/data/Awards.js)
- [`src/data/Services.js`](./src/data/Services.js)

Translations are stored in:

- [`src/translate/en.json`](./src/translate/en.json)
- [`src/translate/fr.json`](./src/translate/fr.json)

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

Format source files:

```bash
npm run format
```

## Customization

### Update portfolio content

Edit the files in [`src/data`](./src/data) to update:

- projects
- certifications
- awards
- services
- education
- experience
- skills

### Update text in both languages

Edit:

- [`src/translate/en.json`](./src/translate/en.json)
- [`src/translate/fr.json`](./src/translate/fr.json)

### Update theme behavior and styling

Theme mode and accent color are managed in:

- [`src/store/index.js`](./src/store/index.js)

Global styles live in:

- [`src/assets/main.css`](./src/assets/main.css)
- [`src/scss/styles.scss`](./src/scss/styles.scss)

## Implementation notes

- The app currently uses a single route: `/`
- AOS animations are initialized in [`src/App.vue`](./src/App.vue)
- Theme mode and accent color are managed through Vuex
- CV download and preview actions are handled in [`src/layout/untils.js`](./src/layout/untils.js)
- Project and certification search rely on metadata defined in the data files

## Deployment

This project includes [`vercel.json`](./vercel.json) and is ready for deployment on Vercel.

Typical production flow:

```bash
npm run build
```

Then deploy the generated app using Vercel or your preferred hosting platform.

## Notes

- The current HTML title in [`index.html`](./index.html) is still `RESUME` and can be improved for branding and SEO.
- Some older source files still contain minor encoding inconsistencies that can be cleaned up in a later pass.
