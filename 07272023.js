// Write a function that takes a Tic-Tac-Toe board and determines the winner, if any.

function isSolved(board) {
  for (const arr of board) {
    if (arr.every((elem) => elem === 1)) {
      return 1;
    }
    if (arr.every((elem) => elem === 2)) {
      return 2;
    }
  }

  for (let i = 0; i < board.length; i++) {
    const horizontal = [board[0][i], board[1][i], board[2][i]];

    if (horizontal.every((arr) => arr === 1)) {
      return 1;
    }
    if (horizontal.every((arr) => arr === 2)) {
      return 2;
    }
  }

  let diagonal = [board[0][0], board[1][1], board[2][2]];

  if (diagonal.every((arr) => arr === 1)) {
    return 1;
  }
  if (diagonal.every((arr) => arr === 2)) {
    return 2;
  }

  diagonal = [board[2][0], board[1][1], board[0][2]];

  if (diagonal.every((arr) => arr === 1)) {
    return 1;
  }
  if (diagonal.every((arr) => arr === 2)) {
    return 2;
  }

  const complete = board.every((arr) => !arr.includes(0));

  return complete ? 0 : -1;
}

console.log(
  isSolved([
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0],
  ]),
  -1
);
console.log(
  isSolved([
    [0, 1, 0],
    [0, 1, 2],
    [2, 1, 0],
  ]),
  1
);
console.log(
  isSolved([
    [1, 0, 2],
    [1, 2, 2],
    [2, 1, 0],
  ]),
  2
);
console.log(
  isSolved([
    [2, 2, 1],
    [1, 1, 2],
    [2, 1, 1],
  ]),
  0
);

// An array of arrays. Each array contains 3 elements of any arrangement of 0 (empty), 1 (X), and/or 2(O). Always valid.
// Return a number indicating the winner (1 or 2), 0 if the game is a draw, or -1 if the game is still playing.

// Create a winners object containing each outcome and the number value.
// Iterate through the arrays, if any 0s exist then set complete to false.
// Iterate through the arrays. Return the horizontal winner.
// Iterate through the arrays. Return the vertical winner.
// Iterate through the array. Return the diagonal winner.

// If complete, return 0. Else return -1.
