# 251202_GENAI

A browser-based parametric tower generator that stacks procedural floor slabs and lets you sculpt the tower profile in real time. Three.js renders the geometry while Tweakpane exposes slider, gradient, and color controls so you can iterate quickly on twisting, tapering, and chromatic treatments before exporting screenshots or handing designs off to downstream tools.

## Features
- Three.js scene with orbit controls, physically based lighting, and responsive renderer sized to the viewport.
- Parametric slab builder supporting up to hundreds of floors with adjustable total height, twist, and radius gradients.
- Vertex-colored floor geometry that blends between configurable bottom and top colors for a continuous facade gradient.
- Lightweight HUD showing derived metrics (floor height, floor count, top radius) so you can design to targets.
- Optional auto-rotation to present the tower dynamically during concept reviews.

## Getting Started
1. Install dependencies: `npm install`.
2. Launch the Vite dev server: `npm run dev` and open the printed localhost URL in your browser.
3. Adjust parameters in the control panel to regenerate the tower instantly; stop the dev server with `Ctrl+C` when you are finished.

## Controls
- **Floors / Height**: Set the number of floor slabs and overall tower height; per-floor slab thickness updates automatically.
- **Scaling Gradient**: Define minimum/maximum radii plus easing mode to taper or bulge the tower profile.
- **Twist Gradient**: Choose starting/ending twist angles (in radians) and easing to control how much each floor rotates along the stack.
- **Gradient Colors**: Pick bottom and top colors used for the procedural vertex-color gradient.
- **Motion**: Enable auto-rotation and adjust spin speed for presentation mode (negative values spin clockwise).