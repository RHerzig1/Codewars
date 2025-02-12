// Langton's ant (track the path of an ant).

function ant(grid, column, row, n, dir = 0): number[][] {
  if (n === 0) {
    return grid;
  }

  // Determine and flip current color of current cell
  const color = grid[row][column];
  grid[row][column] = color === 0 ? 1 : 0;

  // Update dir based on original cell color
  color === 0 ? dir-- : dir++;

  if (dir > 3) {
    dir = 0;
  } else if (dir < 0) {
    dir = 3;
  }

  // Move ant
  if (dir === 0) {
    row--; // North
  } else if (dir === 1) {
    column++; // East
  } else if (dir === 2) {
    row++; // South
  } else {
    column--; // West
  }

  // Add missing row, if necessary
  if (grid[row] === undefined) {
    if (row < 0) {
      grid.unshift(new Array(grid[0].length).fill(0));
      row++; // Calibrate ant's position
    } else {
      grid.push(new Array(grid[0].length).fill(0));
    }
  }

  // Add missing column, if necessary, to all rows and calibrate ant's position
  if (grid[row][column] === undefined) {
    if (column < 0) {
      grid.map((row) => row.unshift(0));
      column++; // Calibrate ant's position
    } else {
      grid.map((row) => row.push(0));
    }
  }

  // Decrement n
  n--;

  return ant(grid, column, row, n, dir);
}

console.log(ant([[1]], 0, 0, 1, 0), [[0, 0]]);
console.log(ant([[0]], 0, 0, 1, 0), [[0, 1]]);
console.log(ant([[1]], 0, 0, 3, 0), [[0, 1], [0, 1]]);

// grid: number[][]. 0 = white, 1 = black. 0 = dir - 1, 1 = dir + 1. New squares always start as 0.
// column: number. Horizontal location of ant.
// row: number. Vertical location of ant.
// n: number. Count of iterations left.
// dir: number. Direction of ant. 0 = north, 1 = east, 2 = south, 3 = west. Defaults to 0.
// Return number[][] to show the path of the ant.
