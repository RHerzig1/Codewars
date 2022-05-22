// Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
  let sum = 0
  arr = arr.sort((a, b) => b - a)

  for (let i = 0; i < arr.length - 1; i++) {
    sum += (arr[i] -  arr[i + 1]) || 0
  }

return sum
}

// An array of integers
// A single integer. 0, if the array is empty.
// [2, 1, 10]  ->  9

// Take the array in the parameter.
// Create a variable sum = 0
// Sort it in order of greatest to smallest integer.
// Using a for loop, iterate through the array.
// Calculate the sum with array[i] - array[i + 1].
// Add the calculation to sum.
// Return sum.

// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e