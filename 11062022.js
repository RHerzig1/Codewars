// Is every element in an array a squared number

function  isSquare(arr) {
  if (arr.length === 0) return undefined
  return arr.every(elem => Math.sqrt(elem) % 1 === 0)
}

// An array of integers. Whole numbers. Positive. Length may be 0.
// True if all numbers are squared. False if they're not. Undefined if the array is empty.
// Use the modulus to test if the square root of every number is a whole number.