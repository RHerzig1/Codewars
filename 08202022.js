// Improve Math.round()
// Write a function Math.rountTo that rounds a number to the requested precision.

Math.roundTo = function (number, precision) {
  return Number(number.toFixed(precision))
}

// Parameter is a number.
// Return the number rounded to the requested precision.
// Use to toFixed() method to round the number.
// Transform the returned string back into a number.
// Return the new number.