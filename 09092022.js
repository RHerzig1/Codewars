// Calculate score in Tetris

function getScore(arr) {
  let lines = 0
  const points = [0, 40, 100, 300, 1200]
  let score = 0

  for (let line of arr) {
    score += Math.floor(1 + lines / 10) * points[line]
    lines += line
  }

  return score
}

// The parameter is an array of integers. Each element is >= 1 and <= 4
// Calculate and return the final score as an integer.
// Declare a lines variable equal to 0.
// Declare a level variable equal to lines / 10, rounded up.
// Declare a points array equal to [40, 100, 300, 1200].
// Declare a score integer equal to 0.
// Iterate through the parameter.
// For each element, add the integer to lines.
// Get the corresponding score from the array.
// Multiply the score by the level.
// Add the score to the score variable.
// After iterating, return the total score.

// The level increases after every 10 lines cleared.
// Level # | points for 1, 2, 3, 4 lines
// Level 0: 40, 100, 300, 1200
// Level 1: 80, 200, 600, 2400
// Level 7: 320, 800, 2400, 9600