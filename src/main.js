import './styles.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Pane } from 'tweakpane';
import { createTower, disposeTower, sampleProfile, easingOptions } from './tower.js';

const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf3dcc5);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(80, 90, 160);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

scene.add(new THREE.AmbientLight(0xbcc4d6, 0.7));
const keyLight = new THREE.DirectionalLight(0xffffff, 0.9);
keyLight.position.set(60, 120, 140);
scene.add(keyLight);
const fillLight = new THREE.DirectionalLight(0x99a8ff, 0.4);
fillLight.position.set(-80, 60, -40);
scene.add(fillLight);

const grid = new THREE.GridHelper(500, 20, 0xc4a382, 0xd9b596);
grid.position.y = -1;
const fadeGridMaterial = (material) => {
  material.transparent = true;
  material.opacity = 0.12;
  material.depthWrite = false;
};
if (Array.isArray(grid.material)) {
  grid.material.forEach(fadeGridMaterial);
} else {
  fadeGridMaterial(grid.material);
}
scene.add(grid);

const pivot = new THREE.Group();
scene.add(pivot);
let towerGroup = null;

const metricsEl = document.createElement('div');
metricsEl.className = 'metrics-card';
app.appendChild(metricsEl);

const paneContainer = document.createElement('div');
paneContainer.className = 'pane-card';
app.appendChild(paneContainer);

const params = {
  floors: 28,
  totalHeight: 160,
  slabGap: 0.4,
  radiusMin: 4,
  radiusMax: 18,
  twistMin: 0,
  twistMax: Math.PI,
  scaleEasing: 'easeOut',
  twistEasing: 'easeInOut',
  bottomColor: '#1152b6',
  topColor: '#f25f3a',
  autoSpin: true,
  spinSpeed: 0.2,
};

const pane = new Pane({
  title: 'Tower Controls',
  container: paneContainer,
});

controls.target.set(0, params.totalHeight * 0.35, 0);
controls.update();

pane.addBinding(params, 'floors', { min: 3, max: 150, step: 1 });
pane.addBinding(params, 'totalHeight', { min: 20, max: 500, step: 1, label: 'height' });
pane.addBinding(params, 'slabGap', { min: 0, max: 0.85, step: 0.01, label: 'slab gap' });

const scaleFolder = pane.addFolder({ title: 'Scaling' });
const radiusMinBinding = scaleFolder.addBinding(params, 'radiusMin', {
  min: 1,
  max: 40,
  step: 0.1,
  label: 'radius min',
});
const radiusMaxBinding = scaleFolder.addBinding(params, 'radiusMax', {
  min: 1,
  max: 40,
  step: 0.1,
  label: 'radius max',
});
scaleFolder.addBinding(params, 'scaleEasing', {
  options: easingOptions.reduce((acc, key) => ({ ...acc, [key]: key }), {}),
  label: 'gradient',
});

const twistFolder = pane.addFolder({ title: 'Twist' });
const twistMinBinding = twistFolder.addBinding(params, 'twistMin', {
  min: -Math.PI * 2,
  max: Math.PI * 2,
  step: 0.01,
  label: 'twist min',
});
const twistMaxBinding = twistFolder.addBinding(params, 'twistMax', {
  min: -Math.PI * 2,
  max: Math.PI * 2,
  step: 0.01,
  label: 'twist max',
});
twistFolder.addBinding(params, 'twistEasing', {
  options: easingOptions.reduce((acc, key) => ({ ...acc, [key]: key }), {}),
  label: 'gradient',
});

const colorFolder = pane.addFolder({ title: 'Gradient Colors' });
colorFolder.addBinding(params, 'bottomColor', { view: 'color' });
colorFolder.addBinding(params, 'topColor', { view: 'color' });

const motionFolder = pane.addFolder({ title: 'Motion' });
motionFolder.addBinding(params, 'autoSpin', { label: 'auto rotate' });
motionFolder.addBinding(params, 'spinSpeed', { min: -1, max: 1, step: 0.01, label: 'spin speed' });

pane.on('change', () => {
  normalizeParams();
  rebuildTower();
});

function normalizeParams() {
  if (params.radiusMin > params.radiusMax) {
    const swap = params.radiusMin;
    params.radiusMin = params.radiusMax;
    params.radiusMax = swap;
    radiusMinBinding.refresh();
    radiusMaxBinding.refresh();
  }
  if (params.twistMin > params.twistMax) {
    const swap = params.twistMin;
    params.twistMin = params.twistMax;
    params.twistMax = swap;
    twistMinBinding.refresh();
    twistMaxBinding.refresh();
  }
}

function rebuildTower() {
  if (towerGroup) {
    pivot.remove(towerGroup);
    disposeTower(towerGroup);
  }
  towerGroup = createTower(params);
  pivot.add(towerGroup);
  updateMetrics();
}

function updateMetrics() {
  const floors = Math.max(1, Math.floor(params.floors));
  const floorHeight = params.totalHeight / floors;
  const topProfile = sampleProfile(params, 1);
  metricsEl.innerHTML = `
    <span>Floors: ${floors}</span>
    <span>Floor height: ${floorHeight.toFixed(2)}m</span>
    <span>Top radius: ${topProfile.radius.toFixed(2)}m</span>
  `;
}

function handleResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

window.addEventListener('resize', handleResize);
handleResize();
rebuildTower();

const clock = new THREE.Clock();
function renderLoop() {
  const delta = clock.getDelta();
  if (params.autoSpin && towerGroup) {
    pivot.rotation.y += delta * params.spinSpeed;
  }
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(renderLoop);
}

renderLoop();
