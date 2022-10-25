// Count number of unique arrays formed by picking one element from each subarray.

function solve(arr) {
  let result = arr.map(elem => (new Set(elem)).size)
  return result.reduce((a, c) => a * c)
}


console.log(solve([[1,2],[4],[5,6]])) // 4
console.log(solve([[1,2],[4,4],[5,6,6]])) // 4
console.log(solve([[1,2],[3,4],[5,6]])) // 8
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]])) // 72

// The parameter is an array of subarrays. Each subarray contains positive whole numbers, no letters, no special characters, no strings.
// Return, as a number, the amount of unique array that can be created by pulling a single element from each subarray.
// Iterate through the array.
// Remove duplicate elements from each subarray.
// Mutliple the size of each subarray together.
// Return the product.