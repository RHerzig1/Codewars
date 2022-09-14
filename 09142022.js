// Is sum of squares from array larger than sum of cubes from another

function arrayMadness(a, b) {
  let squared = a.reduce((a, b) => a + b ** 2, 0)
  let cubed = b.reduce((a, b) => a + b ** 3, 0)
  return squared > cubed
}

// The parameters are both arrays of numbers with a length of at least 1 element.
// Return true or false.
// Declare squared and cubed variables.
// Set the values to the arrays squared or cubed using the reduce method.
// Return a boolean stating squared is larger than cubed.