// Return the sum of the two unique numbers of an array

// function repeats(arr) {
//   const results = []
//   arr = arr.sort()
//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i] !== arr[i + 1]) {
//       results.push(arr[i])
//       i -= 1
//     }
//   }
//   return results.reduce((a, c) => a + c, 0)
// }

function repeats(arr) {
  return arr.filter(elem => arr.indexOf(elem) === arr.lastIndexOf(elem)).reduce((a, c) => a + c, 0)
}

console.log(repeats([4, 5, 7, 5, 4, 8]), 15)
console.log(repeats([9, 10, 19, 13, 19, 13]), 19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12)
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22)
console.log(repeats([5, 10, 19, 13, 10, 13]), 24)

// Parameter is an array of integers. Never empty. Positive integers. Always whole numbers. Always a number. Always only two unique numbers.
// Return is the sum of the unique numbers. Positive, whole number.
// Iterate through the parameter array.
// Select the elements that only appear once.
// Push them into a results array.
// Reduce the results array.
// Returnt the sum.