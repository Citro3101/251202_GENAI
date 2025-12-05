import * as THREE from 'three';

const easingMap = {
  linear: (t) => t,
  easeIn: (t) => t * t,
  easeOut: (t) => 1 - (1 - t) * (1 - t),
  easeInOut: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
};

export const easingOptions = Object.keys(easingMap);

const DEFAULT_SIDES = 36;
const TOP_TAPER = 0.92;

export function createTower(params) {
  const group = new THREE.Group();
  const floors = Math.max(1, Math.floor(params.floors));
  const totalHeight = Math.max(1, params.totalHeight);
  const radiusMin = Math.max(0.1, Math.min(params.radiusMin, params.radiusMax));
  const radiusMax = Math.max(radiusMin + 0.1, Math.max(params.radiusMin, params.radiusMax));
  const twistMin = params.twistMin;
  const twistMax = params.twistMax;
  const scaleEase = getEasingFn(params.scaleEasing);
  const twistEase = getEasingFn(params.twistEasing);
  const colorBottom = new THREE.Color(params.bottomColor);
  const colorTop = new THREE.Color(params.topColor);
  const floorHeight = totalHeight / floors;
  const slabHeight = floorHeight * 0.82;

  const material = new THREE.MeshStandardMaterial({
    vertexColors: true,
    metalness: 0.15,
    roughness: 0.65,
  });

  for (let i = 0; i < floors; i += 1) {
    const normalizedCenter = floors === 1 ? 0 : i / (floors - 1 || 1);
    const normalizedBottom = i / floors;
    const normalizedTop = (i + 1) / floors;

    const radius = THREE.MathUtils.lerp(radiusMin, radiusMax, scaleEase(normalizedCenter));
    const twist = THREE.MathUtils.lerp(twistMin, twistMax, twistEase(normalizedCenter));

    const geo = buildSlabGeometry({
      height: slabHeight,
      topRadius: radius * TOP_TAPER,
      bottomRadius: radius,
      segments: DEFAULT_SIDES,
    });

    applyGradient(geo, {
      bottom: colorBottom.clone().lerp(colorTop, normalizedBottom),
      top: colorBottom.clone().lerp(colorTop, normalizedTop),
      height: slabHeight,
    });

    const mesh = new THREE.Mesh(geo, material);
    mesh.position.y = -totalHeight / 2 + floorHeight * i + floorHeight / 2;
    mesh.rotation.y = twist;
    group.add(mesh);
  }

  group.userData.sharedMaterial = material;
  group.userData.meta = { floors, totalHeight, floorHeight };
  return group;
}

export function disposeTower(group) {
  if (!group) return;
  group.traverse((child) => {
    if (child.isMesh) {
      child.geometry?.dispose?.();
    }
  });
  group.userData.sharedMaterial?.dispose?.();
}

export function sampleProfile(params, normalizedHeight) {
  const ratio = THREE.MathUtils.clamp(normalizedHeight, 0, 1);
  const radiusMin = Math.max(0.1, Math.min(params.radiusMin, params.radiusMax));
  const radiusMax = Math.max(radiusMin + 0.1, Math.max(params.radiusMin, params.radiusMax));
  const twistMin = params.twistMin;
  const twistMax = params.twistMax;
  const scaleEase = getEasingFn(params.scaleEasing);
  const twistEase = getEasingFn(params.twistEasing);

  return {
    radius: THREE.MathUtils.lerp(radiusMin, radiusMax, scaleEase(ratio)),
    twist: THREE.MathUtils.lerp(twistMin, twistMax, twistEase(ratio)),
  };
}

function getEasingFn(name) {
  return easingMap[name] || easingMap.linear;
}

function buildSlabGeometry({ height, topRadius, bottomRadius, segments }) {
  return new THREE.CylinderGeometry(topRadius, bottomRadius, height, segments, 1, false);
}

function applyGradient(geometry, { bottom, top, height }) {
  const position = geometry.attributes.position;
  const colorAttribute = new Float32Array(position.count * 3);
  const working = new THREE.Color();

  for (let i = 0; i < position.count; i += 1) {
    const y = position.getY(i);
    const t = THREE.MathUtils.clamp((y + height / 2) / height, 0, 1);
    working.copy(bottom).lerp(top, t);
    colorAttribute[i * 3 + 0] = working.r;
    colorAttribute[i * 3 + 1] = working.g;
    colorAttribute[i * 3 + 2] = working.b;
  }

  geometry.setAttribute('color', new THREE.BufferAttribute(colorAttribute, 3));
}