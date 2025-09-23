# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hyper Mart Shop is a retro-styled product gallery built with vanilla TypeScript and Tailwind CSS. The project compiles to static assets in the `public/` directory that can be deployed to any static hosting service. It features a retro CRT-style interface with animated effects and expandable product cards.

## Development Commands

### Build Commands
```bash
npm run build          # Full build: data copying, CSS compilation, and TypeScript compilation
npm run build:css      # Compile Tailwind CSS from src/input.css to public/styles.css
npm run build:ts       # Compile TypeScript from src/ to public/js/
npm run build:data     # Copy data files from src/data/ to public/data/
```

### Development Commands
```bash
npm run watch          # Run both CSS and TypeScript watchers concurrently
npm run watch:css      # Watch and rebuild CSS on changes
npm run watch:ts       # Watch and rebuild TypeScript on changes
npm run start          # Start the Node.js server (index.js)
```

### Preview
Since this is a static site, use any static file server:
```bash
python3 -m http.server 5173 --directory public
open public/index.html  # Direct file access
```

## Architecture

### File Structure
- `src/main.ts` - Main TypeScript application logic with product rendering and UI interactions
- `src/input.css` - Tailwind CSS entry point with custom styles for retro CRT effects
- `src/data/` - Source data files (copied to public/data/ during build)
- `public/` - Static build output directory
- `scripts/copy-data.mjs` - Node.js script to copy data files during build

### Key Components

**Product Interface (`src/main.ts:1-6`)**
- Defines the structure for product data: name, price, url, imageUrl

**Main Application Logic (`src/main.ts`)**
- `fetchProducts()` - Loads and parses product data from `./data/products.json`
- `createProduct()` - Generates DOM elements for individual product cards
- `renderProducts()` - Renders the complete product list
- `scaleTitle()` - Handles responsive title scaling
- `resetAllProducts()` - Manages expanded/collapsed states

**Styling (`src/input.css`)**
- Uses VT323 monospace font for retro aesthetic
- Custom cursor images from S3
- CRT screen effects with scanlines and vignette
- Rainbow text shadow animations and glitch effects

### Build Process
1. **Data Copying**: `scripts/copy-data.mjs` copies files from `src/data/` to `public/data/`
2. **CSS Compilation**: Tailwind processes `src/input.css` → `public/styles.css`
3. **TypeScript Compilation**: TSC compiles `src/main.ts` → `public/js/main.js`

### Configuration Files
- `tsconfig.json` - TypeScript compiler targeting ES2019 with strict mode
- `tailwind.config.js` - Tailwind configuration scanning public/ and src/ directories
- `firebase.json` - Firebase hosting configuration with public/ as the web root
- `.github/workflows/` - GitHub Actions for automated Firebase deployment

## Development Notes

### TypeScript Configuration
- Target: ES2019 with DOM libraries
- Strict mode enabled with `noEmitOnError: true`
- Output directory: `public/js/`

### Styling Conventions
- Uses Tailwind utility classes extensively
- Custom CSS animations for retro effects in `src/input.css`
- Color scheme: neon colors (#FF00FF, #00FF00, #FFFF00) on dark backgrounds

### Product Data
- Products loaded from `public/data/products.json`
- Required fields: name, url, imageUrl
- Optional field: price (displays "INQUIRE" if null)
- Includes error handling for missing images and malformed data

### Deployment
- Static site deployed via Firebase Hosting
- GitHub Actions automatically build and deploy on pushes to main branch
- No server-side processing required