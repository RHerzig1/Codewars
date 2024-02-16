// Write a function that returns whether or not a Sudoku board is valid.

function isValidSudoku(board: string[][]): boolean {
  let rows = new Map<number, string[]>();
  let cols = new Map<number, string[]>();
  let subBoxes = new Map<string, string[]>();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const cell = board[r][c];

      if (cell === ".") {
        continue;
      }

      const index = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`;

      if (rows.get(r)?.includes(cell)) {
        return false;
      } else if (cols.get(c)?.includes(cell)) {
        return false;
      } else if (subBoxes.get(index)?.includes(cell)) {
        return false;
      }

      rows.set(r, (rows.get(r) || []).concat(cell));
      cols.set(c, (cols.get(c) || []).concat(cell));
      subBoxes.set(index, (subBoxes.get(index) || []).concat(cell));
    }
  }

  return true;
}

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// console.log(isValidSudoku(board), true);

board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// console.log(isValidSudoku(board), false);

board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));

// board: string[][]. board.length === 9. board[i].length === 9. 1 <= board[i] <= 9, or '.' if empty. Always valid.
// Return true or false to indicate whether the board is valid.

// Create hashmaps for rows, columns and each cell.
// Iterate through each cell of the puzzle, assign the value to the given row, column, and subBox (using an index between 0,0 and 2,2).
// If value repeats, return false.

// https://www.youtube.com/watch?v=TjFXEUCMqI8
