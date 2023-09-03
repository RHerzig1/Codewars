// Write a function that can navigate a maze from start to finish.

function mazeRunner(maze, directions) {
  const location = findStart(maze);

  for (const direction of directions) {
    if (direction === "N") {
      location[1]--;
    } else if (direction === "E") {
      location[0]++;
    } else if (direction === "S") {
      location[1]++;
    } else {
      location[0]--;
    }

    if (location[1] < 0 || location[1] >= maze.length) {
      return "Dead";
    } else if (location[0] < 0 || location[0] >= maze[location[1]].length) {
      return "Dead";
    } else if (maze[location[1]][location[0]] === 1) {
      return "Dead";
    }

    if (maze[location[1]][location[0]] === 3) {
      return "Finish";
    }
  }

  return "Lost";
}

function findStart(maze) {
  const y = maze.findIndex((line) => line.includes(2));
  const x = maze[y].indexOf(2);

  return [x, y];
}

const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

console.log(
  mazeRunner(maze, [
    "N",
    "N",
    "N",
    "N",
    "N",
    "E",
    "E",
    "E",
    "E",
    "E",
    "W",
    "W",
  ]),
  "Finish"
);

console.log(mazeRunner(maze, ["N", "N", "N", "W", "W"]), "Dead");

console.log(
  mazeRunner(maze, [
    "N",
    "N",
    "N",
    "N",
    "N",
    "E",
    "E",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
  ]),
  "Dead"
);

// An array of arrays. All valid and have the same number of elements. Represents the maze.
// An array of directions, representing the movements.
// Return a string "Finish", "Dead", or "Lost" depending on whether you reach the end, hit a wall, or anything else.

// Iterate through the directions.
// Write instructions for each movement to navigate the arrays.
// Check the number each movement to evaluate your standing (0 = path, 1 = wall, 2 = start, 3 = end).
