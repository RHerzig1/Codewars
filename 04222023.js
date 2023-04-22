// Write a function that adds the two smallest numbers of an array.

function addTwoSmallestNumbers(arr) {  
  arr = arr.sort((a, b) => a - b)
  return arr[0] + arr[1]
}

console.log(addTwoSmallestNumbers([1, 2, 3, 4, 5]), 3)
console.log(addTwoSmallestNumbers([5, 4, 3, 2, 1]), 3)
console.log(addTwoSmallestNumbers([2, 3, 5, 4, 1]), 3)

// An array containing at least 4 elements. All elements will be positive integers.
// Return the sum of the two smallest integers from the array.

// Sort the array.
// Return the sum of the first and second elements.
