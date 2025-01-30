// Main Component
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { initializeScene } from "../utils/SceneSetup";
import { generateInitialGrid, updateGrid } from "../utils/GameLogic";

const GameOfLife = () => {
  const mountRef = useRef(null);
  const intervalRef = useRef(null);
  const refreshFlagRef = useRef(false);


  useEffect(() => {
    // Initialize the scene
    const { scene, camera, renderer, controls, mesh, gridSize } = initializeScene(mountRef);

    // Load background texture
    const loader = new THREE.TextureLoader();
    loader.load('/textures/space.jpeg', function(texture) {
      // scene.background = texture; // Apply texture as background
      scene.background = new THREE.Color(0xf5f5f5); // Set background color
    });

    // Create and initialize the Game of Life grid
    let grid = generateInitialGrid(gridSize);

    // Function to update the grid and refresh the mesh 
    const refreshGrid = () => {
      const dummy = new THREE.Object3D();
      grid = updateGrid(grid); // Update grid based on Game of Life rules
      let index = 0;
    
    
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          for (let z = 0; z < gridSize; z++) {
            const isAlive = grid[x][y][z];

            if (isAlive) {
              dummy.position.set(x - gridSize / 2, y - gridSize / 2, z - gridSize / 2);
              dummy.scale.set(1, 1, 1); // Ensure visible cubes have a normal scale
            } else {
              dummy.position.set(1000, 1000, 1000); // Move dead cells far away
              dummy.scale.set(0, 0, 0); // Scale dead cells to zero
            }
    
            dummy.updateMatrix();
            mesh.setMatrixAt(index, dummy.matrix); // Update the transformation matrix
            // if (index < 2) {
            //   console.log(`Matrix for instance ${index}:`, dummy.matrix.elements);
            // }
            index++;
          }
        }
      }
    
      // Notify the GPU to update the transformations
      mesh.instanceMatrix.needsUpdate = true;
    };


    // Initial grid setup
    refreshGrid();

    // Interval to update the grid
    intervalRef.current = setInterval(() => {
      // refreshGrid();
      refreshFlagRef.current = true;
    }, 2000); // Update grid every 2 seconds

    // Animation loop with frame rate control
    const animate = () => {
      const fps = 120; // Frames per second
      const interval = 1000 / fps; // Interval in milliseconds
      let lastTime = 0;

      const loop = (time) => {
        requestAnimationFrame(loop);
        if (time - lastTime >= interval) {
          lastTime = time;
          if (refreshFlagRef.current) {
            refreshGrid();
            refreshFlagRef.current = false;
          }
          renderer.render(scene, camera);
          controls.update();
        }
      };
      loop(0);
    };
    animate();

    // Cleanup on unmount
    return () => {
      clearInterval(intervalRef.current);
      if (mountRef.current) {
        // eslint-disable-next-line
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default GameOfLife;


/** Version 2 *
import React, { useEffect, useRef } from "react";
import { initializeScene } from "../utils/SceneSetup";

const GameOfLife = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Initialize the Scene, Camera, Renderer, and Mesh
    const { scene, camera, renderer, controls, mesh, spotlight, gridSize } = initializeScene(mountRef);

    // Placeholder Grid Logic
    const grid = Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(null).map(() => Math.random() > 0.7));

    // Update loop for animation and game logic
    const animate = () => {
      requestAnimationFrame(animate);

      // Example: Rotate the grid for visual testing
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      renderer.render(scene, camera);
      controls.update();
    };

    animate();
    // Debug for errors
    console.log("Renderer initialized:", renderer);
    console.log("Scene children:", scene.children);
    console.log("Camera position:", camera.position);


    // Cleanup renderer on unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement); // Safely remove renderer
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default GameOfLife;
/**  */


/** *  Version 1
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { initializeScene, updateGameLogic } from "../utils/SceneSetup";

const GameOfLife = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Initialize Scene, Camera, Renderer
    const { scene, camera, renderer, controls, mesh, spotlight } = initializeScene();

    // Append Renderer to DOM
    mountRef.current.appendChild(renderer.domElement);

    // Animation and Logic Loop
    let running = true;
    const animate = () => {
      if (running) requestAnimationFrame(animate);

      // Update Game Logic and Renderer
      updateGameLogic(scene, mesh);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on Unmount
    return () => {
      running = false;
      if (mountRef.current)
        mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default GameOfLife;
/**  */