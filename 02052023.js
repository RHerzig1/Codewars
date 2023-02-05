// Write an algorithm that returns the square root of an integer without using the Math object.

function returnSquareRoot(num) {
  root = num
  while (root * root > num) {
    root = ((root + num / root) / 2) | 0
  }
  return root.toFixed(0)
}

console.log(returnSquareRoot(9), 3)
console.log(returnSquareRoot(8), 2)
console.log(returnSquareRoot(0), 0)
console.log(returnSquareRoot(1), 1)

// A whole integer >= 0. Always a number.
// Return the square root of the parameter rounded down to it's nearest whole number. Always be positive. Don't use the Math object.