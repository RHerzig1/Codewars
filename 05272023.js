// Write a function that returns the largest two numbers of an array.

function twoLargestNumbers(arr){
  return arr.sort((a, b) => a - b).slice(-2)
}

console.log(twoLargestNumbers([1, 2, 3, 4, 5]), [4, 5])
console.log(twoLargestNumbers([5, 4, 3, 2, 1]), [4, 5])
console.log(twoLargestNumbers([4, 5]), [4, 5])

// An array of positive integers. At least two elements.
// Return an array containing the largest two elements in ascending order.

// Sort the array.
// Return the last two elems.