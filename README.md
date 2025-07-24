<a name="readme-top"></a>

<br />
<div align="center">
  <h3 align="center">3D Game of Life</h3>

  <p align="center">
    Interactive 3D Implementation of Conway's Game of Life
    <br />
    <a href="https://github.com/pelu-mi/3DGameOfLife"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">Live Demo</a>
    ·
    <a href="https://github.com/pelu-mi/3DGameOfLife/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/pelu-mi/3DGameOfLife/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#3d-game-rules">3D Game Rules</a></li>
    <li><a href="#technical-implementation">Technical Implementation</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#authors">Authors</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

3D Game of Life is an innovative three-dimensional implementation of Conway's famous cellular automaton, bringing the classic Game of Life into immersive 3D space. This project transforms the traditional 2D grid-based simulation into a dynamic 3D cube world where cellular evolution occurs across three spatial dimensions.

Conway's Game of Life, originally conceived as a 2D cellular automaton, demonstrates how simple rules can create complex, emergent behaviors. This 3D adaptation extends those fascinating principles into volumetric space, creating intricate patterns and behaviors that evolve over time within a 10×10×10 cube grid.

Traditional 2D implementations are limited to flat surfaces with 8-neighbor interactions per cell. Our 3D version expands this concept dramatically, where each cell can interact with up to 26 neighboring cells in three-dimensional space. This fundamental change creates entirely new categories of patterns, from simple 3D oscillators to complex propagating structures that would be impossible in 2D space.

### Core Functionality

 - [x] **3D Cellular Automaton**: Full three-dimensional implementation of Game of Life rules with 26-neighbor interactions
 - [x] **Real-Time Visualization**: Smooth 120fps rendering with automatic generation updates every 2 seconds
 - [x] **Interactive 3D Navigation**: Complete camera control system with zoom, pan, and rotation capabilities using OrbitControls
 - [x] **Volumetric Grid System**: 10×10×10 cube grid supporting 1,000 simultaneous cellular automata instances
 - [x] **Performance Optimization**: Efficient instanced mesh rendering for handling thousands of cubes simultaneously
 - [x] **Dynamic Visual Effects**: Professional lighting system with spotlight, ambient lighting, and shadow mapping
 - [x] **Space Environment**: Immersive space-themed background textures and atmospheric rendering
 - [x] **Adaptive 3D Rules**: Custom neighbor-counting algorithm optimized for three-dimensional cellular interactions
 - [x] **Responsive Design**: Full-screen immersive experience with automatic window resizing support
 - [x] **Random Generation**: Procedural initial state generation with 20% cell density for optimal pattern emergence
 - [x] **Memory Efficient**: Smart cube positioning system that moves dead cells off-screen rather than deleting them

The application serves as both an educational tool for understanding cellular automata in higher dimensions and a mesmerizing visualization platform for exploring emergent complexity in 3D space. It demonstrates how mathematical concepts can be transformed into interactive, visual experiences that reveal the hidden beauty of algorithmic systems.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

Technologies and frameworks used to build 3D Game of Life:

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Three.js](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![Create React App](https://img.shields.io/badge/Create%20React%20App-%23000000.svg?style=for-the-badge&logo=create-react-app&logoColor=%2361DAFB)
* ![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Follow these steps to set up 3D Game of Life locally for development or personal use.

### Prerequisites

Ensure you have the following installed on your system:

* **Node.js** (version 18.0 or higher)
  ```sh
  # Check your Node.js version
  node --version
  ```

* **npm** (latest version recommended)
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/pelu-mi/3DGameOfLife.git
   ```

2. **Navigate to the project directory**
   ```sh
   cd 3DGameOfLife
   ```

3. **Install dependencies**
   ```sh
   npm install
   ```

4. **Start the development server**
   ```sh
   npm start
   ```

The application will be available at `http://localhost:3000`

### Build for Production

To create an optimized production build:

```sh
npm run build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->
## Usage

### Basic Navigation

1. **Launch Application**: Open the application in your web browser to see the initial 3D grid
2. **Camera Controls**: 
   - **Rotate**: Click and drag to rotate around the 3D grid
   - **Zoom**: Use mouse wheel to zoom in/out
   - **Pan**: Right-click and drag to pan the view
3. **Observe Evolution**: Watch as the cellular automaton evolves automatically every 2 seconds
4. **Reset**: Refresh the page to generate a new random initial configuration

### Interaction Tips

- **Optimal Viewing**: Position the camera at an angle to see both surface and internal cellular activities
- **Pattern Recognition**: Look for recurring patterns, oscillators, and propagating structures
- **3D Perspective**: Rotate frequently to understand the true three-dimensional nature of the patterns
- **Performance**: The application runs at 120fps for smooth real-time visualization

### Understanding the Visualization

- **Green Cubes**: Represent living cells in the current generation
- **Empty Space**: Areas where cells have died or never existed  
- **Dynamic Updates**: The grid automatically evolves based on 3D Game of Life rules
- **Spatial Context**: The space background provides depth perception for better 3D understanding

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

### 🎮 **3D Cellular Automaton Engine**
- Complete three-dimensional implementation of Conway's Game of Life
- 26-neighbor interaction system for each cell (compared to 8 in 2D)
- Automatic generation evolution with 2-second intervals

### 🎨 **Advanced 3D Visualization**
- Real-time WebGL rendering using Three.js
- Instanced mesh optimization for rendering 1,000+ cubes efficiently
- Professional lighting system with shadows and ambient illumination

### 🎯 **Interactive Camera System**
- Full orbital camera controls with smooth movement
- Zoom functionality for detailed pattern examination
- Free rotation for complete 3D perspective exploration

### ⚡ **Performance Optimization**
- 120fps rendering with frame rate control
- Efficient memory management with off-screen positioning for dead cells
- GPU-accelerated matrix transformations for smooth animations

### 🌌 **Immersive Environment**
- Space-themed background textures for atmospheric depth
- Dynamic lighting effects with spotlight positioning
- Professional material rendering with Phong shading

### 🔢 **Advanced Algorithm Implementation**
- Custom 3D neighbor counting with boundary checking
- Optimized grid update algorithm using deep cloning
- Random initial state generation with configurable density

## 3D Game Rules

The 3D Game of Life extends Conway's original rules into three-dimensional space:

### Traditional 2D Rules (for comparison):
- Any live cell with 2-3 neighbors survives
- Any dead cell with exactly 3 neighbors becomes alive
- All other cells die or remain dead

### 3D Adaptation:
- **Neighborhood**: Each cell has up to 26 neighbors (3³ - 1) instead of 8
- **Survival Rule**: A living cell survives if it has exactly 2 or 3 neighbors
- **Birth Rule**: A dead cell becomes alive if it has exactly 3 neighbors
- **Death Rule**: All other cells die from isolation (<2) or overcrowding (>3)

### 3D Pattern Categories:
1. **Still Lifes**: Stable 3D structures that don't change
2. **Oscillators**: Patterns that return to their initial state after a fixed number of generations
3. **Spaceships**: Patterns that translate themselves across 3D space
4. **Complex Propagators**: Unique 3D patterns impossible in 2D space

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technical Implementation

### Architecture Overview

The application follows a modular React architecture with clear separation of concerns:

```
src/
├── components/
│   ├── GameOfLife.jsx      # Main 3D scene and game loop
│   └── ControlsPanel.jsx   # Future GUI controls interface
├── utils/
│   ├── GameLogic.js        # Pure cellular automaton functions
│   └── SceneSetup.js       # Three.js scene initialization
└── App.js                  # Application entry point
```

### Key Technical Features

- **Instanced Rendering**: Uses `THREE.InstancedMesh` for efficient rendering of multiple identical cubes
- **Matrix Transformations**: GPU-accelerated position updates using transformation matrices
- **Memory Optimization**: Dead cells are positioned off-screen rather than deleted and recreated
- **Frame Rate Control**: Implements custom animation loop with 120fps target
- **3D Neighbor Algorithm**: Optimized triple-nested loop for 26-neighbor counting

### Performance Considerations

- Grid size limited to 10³ (1,000 cells) for optimal browser performance
- Instanced mesh rendering reduces draw calls significantly
- Custom animation timing prevents unnecessary computations
- Efficient deep cloning using JSON serialization for grid updates

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

_Future enhancements and features planned for 3D Game of Life:_

- [ ] **Interactive Controls Interface**
  - [ ] GUI panel for adjusting generation speed
  - [ ] Custom rule configuration (birth/survival numbers)
  - [ ] Real-time grid size adjustment

- [ ] **Pattern Library & Tools**
  - [ ] Pre-defined 3D pattern library (gliders, oscillators, etc.)
  - [ ] Pattern saving and loading functionality
  - [ ] Manual cell editing mode for pattern creation

- [ ] **Enhanced Visualization**
  - [ ] Multiple color schemes for different cell ages
  - [ ] Particle effects for cell birth/death events
  - [ ] Trail visualization showing cell movement history

- [ ] **Advanced Features**
  - [ ] Multi-rule support (different neighborhoods, survival rules)
  - [ ] Export functionality for patterns and animations
  - [ ] Performance metrics and statistics dashboard

- [ ] **User Experience**
  - [ ] Mobile device optimization and touch controls
  - [ ] VR/AR support for immersive 3D exploration
  - [ ] Tutorial mode explaining 3D Game of Life concepts

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->
## Authors

**Oluwapelumi Fadolapo** - [@pelu-mi](https://github.com/pelu-mi) - [pelumifadolapo7@gmail.com](mailto:pelumifadolapo7@gmail.com)

================================================================

**Project Link**: [https://github.com/pelu-mi/3DGameOfLife](https://github.com/pelu-mi/3DGameOfLife)

**Live Preview**: [Coming Soon](#)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Resources and inspirations that made 3D Game of Life possible:

* [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) - The original cellular automaton concept
* [Three.js Documentation](https://threejs.org/) - Comprehensive 3D graphics library
* [React Documentation](https://react.dev/) - Modern frontend framework
* [WebGL Specifications](https://www.khronos.org/webgl/) - Web graphics standards
* [Cellular Automata Research](https://mathworld.wolfram.com/CellularAutomaton.html) - Mathematical foundations
* [3D Game of Life Studies](https://www.conwaylife.com/) - Community research on cellular automata
* [OrbitControls Documentation](https://threejs.org/docs/#examples/en/controls/OrbitControls) - Camera control implementation
* [Instanced Rendering Techniques](https://threejs.org/examples/#webgl_instancing_performance) - Performance optimization methods
* [Academic Papers on 3D Cellular Automata](https://arxiv.org/search/cs?query=3D+cellular+automata) - Research foundations
* [Game of Life Pattern Collections](https://copy.sh/life/) - Pattern inspiration and reference

<p align="right">(<a href="#readme-top">back to top</a>)</p>
