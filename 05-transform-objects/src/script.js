import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Group
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// Position -> Vector3
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
mesh.position.set(0.7, -0.6, 1)
console.log(
    'Mesh position = ' +
    JSON.stringify(mesh.position, null, 2)
)
console.log(
    'Normalized mesh position = ' +
    JSON.stringify(mesh.position.normalize(), null, 2)
)
console.log(
    'Mesh position length = ' +
    mesh.position.length()
)

// Scale -> Vector3
mesh.scale.set(2, 0.25, 0.5)
console.log(
    'Mesh scale = ' +
    JSON.stringify(mesh.scale, null, 2)
)

// Rotation -> Euler
// Quaternion is also an option.
// pi = half-rotation cause math
mesh.rotation.reorder('YXZ') // changes which order you rotate objects
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
console.log(
    'Distance of mesh position from camera position = ' +
    mesh.position.distanceTo(camera.position)
)

camera.lookAt(mesh.position)

scene.add(camera)

/**
 * Axes helper
 */
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)