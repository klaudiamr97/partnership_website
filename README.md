# Partnership Website

This project is a partnership offer website from Digivate to Artichoke, showcasing the benefits and opportunities of collaboration. The website is built using Next.js, React, and Tailwind CSS.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Lint](#lint)
- [Folder Structure](#folder-structure)
- [License](#license)

## Installation

To install the dependencies, run:

```sh
npm install
```

## Development

To start the development server, run:

```sh
npm run dev
```

This will start the Next.js development server with Turbopack.

## Build

To build the project for production, run:

```sh
npm run build
```

## Lint

To lint the project, run:

```sh
npm run lint
```

## Folder Structure

```plaintext
.
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── .next/
│   ├── _events.json
│   ├── app-build-manifest.json
│   ├── build-manifest.json
│   ├── fallback-build-manifest.json
│   ├── package.json
│   ├── trace
│   ├── transform.js
│   ├── transform.js.map
│   ├── build/
│   │   ├── chunks/
│   ├── cache/
│   │   ├── .rscinfo
│   │   ├── images/
│   ├── server/
│   │   ├── app-paths-manifest.json
│   │   ├── interception-route-rewrite-manifest.js
│   │   └── ...
│   ├── static/
│   │   ├── chunks/
│   │   └── ...
├── public/
│   ├── favicon.ico
│   ├── favicon.png
├── src/
│   ├── api/
│   │   └── useFetchData.jsx
│   ├── app/
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Article.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── CTA.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Hero.jsx
│   │   ├── ImageText.jsx
│   │   ├── ListArticle.jsx
│   │   └── ListBlock.jsx
│   ├── styles/
│   │   └── globals.css
```

## License

This project is licensed under the MIT License.
