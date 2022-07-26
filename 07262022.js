// Create a multiplication table
// For a provided size, create a multiplication table.

multiplicationTable = function(size) {
  const array = []
  for (let i = 1; i <= size; i++) {
    let subArray = Array(size).fill(1).map((elem, index) => (elem + index) * i)
    array.push(subArray)
  }
  return array
}


// Parameter is size, a positive integer.
// Return an array of arrays that make up the multiplication table.
// 3 -> [[1,2,3],[2,4,6],[3,6,9]]
// Create an array with size elements, and fill it with 1s. Repeat size times.
// Iterate through the arrays. Starting with i = 1, and increasing incrementally for each array, multiply all numbers by i.
// Return an array of arrays.