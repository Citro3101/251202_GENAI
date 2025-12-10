import * as THREE from 'three';

const easingMap = {
  linear: (t) => t,
  easeIn: (t) => t * t,
  easeOut: (t) => 1 - (1 - t) * (1 - t),
  easeInOut: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
};

export const easingOptions = Object.keys(easingMap);

const TOP_TAPER = 0.92;
const DEFAULT_GAP_RATIO = 0.4;
const BASE_CLEARANCE = 20; // lift tower above ground grid

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
  const floorHeight = totalHeight / floors;
  const gapRatio = THREE.MathUtils.clamp(
    typeof params.slabGap === 'number' ? params.slabGap : DEFAULT_GAP_RATIO,
    0,
    0.95,
  );
  const slabHeight = floorHeight * (1 - gapRatio);
  const gapHeight = floorHeight - slabHeight;

  const material = new THREE.MeshBasicMaterial({
    color: 0x000000,
    wireframe: true,
  });

  for (let i = 0; i < floors; i += 1) {
    const normalizedCenter = floors === 1 ? 0 : i / (floors - 1 || 1);

    const radius = THREE.MathUtils.lerp(radiusMin, radiusMax, scaleEase(normalizedCenter));
    const twist = THREE.MathUtils.lerp(twistMin, twistMax, twistEase(normalizedCenter));

    const geo = buildSquareSlabGeometry({
      height: slabHeight,
      topRadius: radius * TOP_TAPER,
      bottomRadius: radius,
    });

    const mesh = new THREE.Mesh(geo, material);
    mesh.position.y = -totalHeight / 2 + floorHeight * i + floorHeight / 2;
    mesh.rotation.y = twist;
    group.add(mesh);
  }

  group.userData.sharedMaterial = material;
  group.userData.meta = { floors, totalHeight, floorHeight };
  const clearanceOffset = totalHeight / 2 - gapHeight / 2 + BASE_CLEARANCE;
  group.position.y = clearanceOffset;
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

function buildSquareSlabGeometry({ height, topRadius, bottomRadius }) {
  const width = bottomRadius * 2;
  const depth = bottomRadius * 2;
  const geometry = new THREE.BoxGeometry(width, height, depth, 1, 1, 1);

  if (topRadius !== bottomRadius) {
    const taperFactor = topRadius / bottomRadius;
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i += 1) {
      const y = position.getY(i);
      if (y > 0) {
        // Scale only the top vertices so each box becomes a tapered slab.
        position.setX(i, position.getX(i) * taperFactor);
        position.setZ(i, position.getZ(i) * taperFactor);
      }
    }
    position.needsUpdate = true;
  }

  return geometry;
}
