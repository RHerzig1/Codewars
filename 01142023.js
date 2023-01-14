// Write an algorithm that, given an array of two numbers, returns the cummulative sum of the two numbers and all those in inbetween.

function calculateSumOfRange(arr) {
  let result = 0

  for (let i = arr[0]; i <= arr[1]; i++) {
    result += i
  }

  return result
}

console.log(calculateSumOfRange([1, 4]), 10)
console.log(calculateSumOfRange([0, 4]), 10)
console.log(calculateSumOfRange([-3, 4]), 4)

// An array containing two numbers. May be positive or negative. Always whole numbers. Always a length of 2.
// Return the sum of the two numbers, plus all numbers inbetween.

// Declare a results variable equal to 0.
// Iterate through the range of numbers, for each iteration, add the number to the result.
// Return the result.