# 251202_GENAI

Parametric tower generator built with Three.js and Tweakpane. The `gh-pages` branch serves only the static build (index + assets) for GitHub Pages; source lives on `main`.

## Live Demo
- GitHub Pages: https://citro3101.github.io/251202_GENAI/

## Development (on `main`)
1) Check out `main`: `git checkout main`.
2) Install dependencies: `npm install`.
3) Run dev server: `npm run dev` (open the shown localhost URL).
4) Build: `npm run build` (outputs to `dist/`).

## Deploying to GitHub Pages
- Build on `main`, then copy the `dist/` contents to the `gh-pages` branch root (index + assets). Pages is configured for relative paths, so the site works at the project URL without absolute `/` paths.

## Controls
- Floors/Height: set floor count and total height (per-floor thickness updates automatically).
- Scaling Gradient: min/max radii plus easing to taper/bulge the profile.
- Twist Gradient: start/end twist (radians) with easing along the stack.
- Gradient Colors: bottom/top colors for the vertex-color gradient.
- Motion: auto-rotate toggle and spin speed (negative = clockwise).
