// Setup Scene
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const initializeScene = (mountRef) => {
  // Create Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(30, 30, 50);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true; // Enable shadow maps
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Optional: softer shadows
  if (mountRef.current) {
    mountRef.current.appendChild(renderer.domElement);
  }

  // Orbit Controls
  const controls = new OrbitControls(camera, renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft ambient light
  const spotlight = new THREE.SpotLight(0xffffff, 5);
  spotlight.position.set(40, 40, 30);
  spotlight.castShadow = true; // Enable shadows (May consider removing this later)
  spotlight.shadow.mapSize.width = 1024; // Shadow map resolution
  spotlight.shadow.mapSize.height = 1024;
  spotlight.shadow.camera.near = 0.5; // Near clipping plane
  spotlight.shadow.camera.far = 500; // Far clipping plane
  scene.add(ambientLight, spotlight);

  // Load the background image
  const textureLoader = new THREE.TextureLoader();
  const backgroundTexture = textureLoader.load('/textures/space.jpeg'); // Replace with updated image URL
  // scene.background = new THREE.Color( 0xffffff ); // White background
  scene.background = backgroundTexture; // Set the scene's background to the loaded image


  // Grid Mesh
  const material = new THREE.MeshPhongMaterial({ color: 0x00ff00, flatShading: true });
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const gridSize = 10; // Define grid size
  const mesh = new THREE.InstancedMesh(geometry, material, gridSize ** 3);
  mesh.castShadow = true; // Ensure the mesh can cast shadows
  mesh.receiveShadow = true; // Ensure the mesh can receive shadows
  scene.add(mesh);
  // const cube = new THREE.Mesh(geometry, material);
  // scene.add(cube); // Add a single cube for debugging


  // Add fog for more realism to the scene
  //scene.fog = new THREE.Fog(0x000000, 1, 500); // Adjust density to 500 for more realism later

  // Pre-fill transformation matrices for all instances
  const dummy = new THREE.Object3D();
  for (let i = 0; i < gridSize ** 3; i++) {
    dummy.position.set(1000, 1000, 1000); // Initially move all instances off-screen
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  //mesh.instanceMatrix.needsUpdate = true;


  return { scene, camera, renderer, controls, mesh, gridSize };
};




/** Version 2 *
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const initializeScene = (mountRef) => {
  // Create Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Append renderer to mountRef
  if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
  } else {
      console.error("mountRef is null during renderer setup.");
  }

  // Scene, Camera, Controls
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(30, 30, 50); // Ensure the camera is far enough to see the grid
  camera.lookAt(0, 0, 0);          // Point the camera at the center of the grid

  const controls = new OrbitControls(camera, renderer.domElement);

  // Lighting
  const spotlight = new THREE.SpotLight(0xffffff, 1.5);
  spotlight.position.set(40, 40, 30);
  scene.add(spotlight);
  const ambientLight = new THREE.AmbientLight(0x404040); // Soft light
  scene.add(ambientLight);


  // Mesh
  const material = new THREE.MeshPhongMaterial({ color: 0x00ff00, flatShading: true });
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const gridSize = 10;
  const mesh = new THREE.InstancedMesh(geometry, material, gridSize ** 3);

  const dummy = new THREE.Object3D();
  let index = 0;
  for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
          for (let z = 0; z < gridSize; z++) {
              dummy.position.set(x - gridSize / 2, y - gridSize / 2, z - gridSize / 2);
              dummy.updateMatrix();
              mesh.setMatrixAt(index++, dummy.matrix);
          }
      }
  }
  scene.add(mesh);

  return { scene, camera, renderer, controls, mesh, spotlight };
};
/** */


/** * Version 1
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const initializeScene = () => {
  // Create Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Add Camera and Controls
  camera.position.set(50, 50, 50);
  const controls = new OrbitControls(camera, renderer.domElement);

  // Lighting
  const spotlight = new THREE.SpotLight(0xffffff, 1.5);
  spotlight.position.set(40, 20, 15);
  scene.add(spotlight);

  // Cube Material
  const material = new THREE.MeshPhongMaterial({ flatShading: true, transparent: true });
  const geometry = new THREE.BoxGeometry();
  const mesh = new THREE.InstancedMesh(geometry, material, 100); // For Game of Life grid
  scene.add(mesh);

  return { scene, camera, renderer, controls, mesh, spotlight };
};

export const updateGameLogic = (scene, mesh) => {
  // Placeholder for Game of Life logic (state updates)
  mesh.rotation.x += 0.01; // Example rotation
};
*/

