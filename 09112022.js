// Calculate total points awarded to sports team

function points(games) {
  let points = 0
  games.forEach(elem => {
    if (elem[0] > elem[2]) points += 3
    else if (elem[0] === elem[2]) points += 1
  })
  return points
}

// The parameter is an array of strings formatted like 'x:y', to represent the game score.
// Return an integer calculated from the game scores. Calculate the points using this formula: if (x > y) points += 3. If (x === y) points += 1.
// Declare a points variable equal to 0.
// Iterate through the parameter array.
// Use a conditional to compare the values of x and y.
// Reference the formula to add points to the point variable.
// After iterating, return points.