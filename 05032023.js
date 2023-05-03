// Write a function that returns a new array by arranging elements from outermost elements to the middle element, traveling clockwise.

function snail(arr) {
  const result = []
  
  while (arr.length) {
    result.push(...arr.shift())
    arr.map(row => result.push(row.pop()))
    arr.reverse().map(row => row.reverse());
  }
  
  return result
}

// An array of arrays
// Return an array containing all elements in order.

// Declare results
// While the original array still exists.
// Shift the first row and push into results.
// Pop the last elems off each elem and push into results.
// Reverse the array and the elems inside of it.
// After iterating, return the result.
