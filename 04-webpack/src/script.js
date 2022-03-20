import './style.css';
import * as THREE from 'three';

console.log('In script.js');

// Scene
console.log('Initializing scene')
const scene = new THREE.Scene();

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
console.log('Cube added to scene');

// Sizes
const width = 800;
const height = 600;
const sizes = {
    width,
    height,
};
const aspectRatio = sizes.width / sizes.height;

// Camera
const fov = 75;
const camera = new THREE.PerspectiveCamera(
    fov,
    aspectRatio,
);
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
