// Manage Game of Life logic
export const generateInitialGrid = (size = 10) => {
  const grid = [];
  for (let x = 0; x < size; x++) {
    grid[x] = [];
    for (let y = 0; y < size; y++) {
      grid[x][y] = [];
      for (let z = 0; z < size; z++) {
        grid[x][y][z] = Math.random() < 0.2; // Randomly set cells alive
      }
    }
  }
  return grid;
};

export const updateGrid = (grid) => {
  const size = grid.length;
  const newGrid = JSON.parse(JSON.stringify(grid));

  const countNeighbors = (x, y, z) => {
    let count = 0;
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dz = -1; dz <= 1; dz++) {
          if (dx === 0 && dy === 0 && dz === 0) continue; // Skip the cell itself
          const nx = x + dx, ny = y + dy, nz = z + dz;
          if (nx >= 0 && ny >= 0 && nz >= 0 && nx < size && ny < size && nz < size) {
            count += grid[nx][ny][nz] ? 1 : 0;
          }
        }
      }
    }
    return count;
  };

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      for (let z = 0; z < size; z++) {
        const neighbors = countNeighbors(x, y, z);
        if (grid[x][y][z]) {
          newGrid[x][y][z] = neighbors === 2 || neighbors === 3; // Stay alive
        } else {
          newGrid[x][y][z] = neighbors === 3; // Rebirth
        }
      }
    }
  }
  return newGrid;
};



/** Version 2 *
export const updateGrid = (grid) => {
  const newGrid = JSON.parse(JSON.stringify(grid));
  for (let x = 1; x < grid.length - 1; x++) {
    for (let y = 1; y < grid[x].length - 1; y++) {
      const neighbors = countNeighbors(grid, x, y);
      if (grid[x][y] && (neighbors < 2 || neighbors > 3)) newGrid[x][y] = false; // Die
      if (!grid[x][y] && neighbors === 3) newGrid[x][y] = true; // Rebirth
    }
  }
  return newGrid;
};

const countNeighbors = (grid, x, y) => {
  let count = 0;
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx !== 0 || dy !== 0) count += grid[x + dx]?.[y + dy] ? 1 : 0;
    }
  }
  return count;
};
/** */


/**  Version 1
export const generateInitialGrid = (size = 10) => {
    const grid = [];
    for (let x = 0; x < size; x++) {
      grid[x] = [];
      for (let y = 0; y < size; y++) {
        grid[x][y] = Math.random() < 0.2; // Random alive/dead state
      }
    }
    return grid;
  };
  
  export const updateGrid = (grid) => {
    // Apply Game of Life rules and return updated grid
    const newGrid = JSON.parse(JSON.stringify(grid));
    for (let x = 1; x < grid.length - 1; x++) {
      for (let y = 1; y < grid[0].length - 1; y++) {
        const neighbors = countNeighbors(grid, x, y);
        if (grid[x][y] && (neighbors < 2 || neighbors > 3)) newGrid[x][y] = false;
        if (!grid[x][y] && neighbors === 3) newGrid[x][y] = true;
      }
    }
    return newGrid;
  };
  
  const countNeighbors = (grid, x, y) => {
    let count = 0;
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (dx !== 0 || dy !== 0) count += grid[x + dx][y + dy] ? 1 : 0;
      }
    }
    return count;
  };
/**  */  