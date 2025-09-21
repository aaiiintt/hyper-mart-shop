# Hyper Mart Shop

A tiny retro product gallery built with vanilla TypeScript and Tailwind CSS. The final build is a plain static bundle in `public/` that you can drop onto any static host.

## Prerequisites
- Node.js 18 or newer (npm included)

## Install
```bash
npm install
```

## Build
```bash
npm run build
```
This command:
- runs Tailwind against `src/input.css`, writing the compiled stylesheet to `public/styles.css`
- compiles `src/main.ts` to modern browser-ready JavaScript in `public/js/main.js`

## Develop
Two watch processes keep CSS and TypeScript rebuilding while you work:
```bash
npm run watch
```
If you prefer to run them separately, use `npm run watch:css` or `npm run watch:ts`.

## Preview
The site is pure static assets, so any static file server works. Examples:

```bash
# Python (built-in)
python3 -m http.server 5173 --directory public

# or, open the file directly
open public/index.html  # macOS; use xdg-open on Linux or start on Windows
```
Then visit `http://localhost:5173` (or whichever port you choose).

## Troubleshooting
- Tailwind warnings about missing utilities usually mean the paths in `tailwind.config.js` do not match your HTML/TS files.
- If the build completes but the browser shows unstyled content, double-check that `public/index.html` references `./styles.css` and `./js/main.js` (both relative paths).
- `npm run build` exits on TypeScript errors; fix diagnostics in `src/main.ts` and rerun.
