# 251202_GENAI

Parametric tower generator built with Three.js and Tweakpane. The `gh-pages` branch serves only the static build (index + assets) for GitHub Pages; source lives on `main`.

## Live Demo
- GitHub Pages: https://citro3101.github.io/251202_GENAI/

## Development (on `main`)
1) Check out `main`: `git checkout main`.
2) Install dependencies: `npm install`.
3) Run dev server: `npm run dev` (open the shown localhost URL).
4) Build: `npm run build` (outputs to `dist/`).

## Controls
- Floors/Height: set floor count and total height (per-floor thickness updates automatically).
- Scaling Gradient: min/max radii plus easing to taper/bulge the profile.
- Twist Gradient: start/end twist (radians) with easing along the stack.
- Gradient Colors: bottom/top colors for the vertex-color gradient.
- Motion: auto-rotate toggle and spin speed (negative = clockwise).

## Deployment
1) Build locally on `main`: `npm install` (first time) then `npm run build` (outputs to `dist/` with relative asset paths).
2) Deploy to Pages: `git checkout gh-pages && rm -rf assets index.html vite.svg && cp -r ../251202_GENAI/dist/* .` (adjust path if needed), then `git add . && git commit -m "Update Pages build" && git push origin gh-pages`.
3) Confirm Pages settings: Settings → Pages → Source = `gh-pages` branch, folder `/` (root).
4) Live demo link: https://citro3101.github.io/251202_GENAI/
