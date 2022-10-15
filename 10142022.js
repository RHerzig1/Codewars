// Write algorithm to test whether array elements are in ascending order

function inAscOrder(arr) {
  let result = true
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      result = false
      break
    }
  }
  return result 
}

// Parameter is an array of numbers.
// Return true or false.
// [1, 2, 3] -> true
// [2, 3, 1] -> false
// Declare a result variable equal to true.
// Iterate through the array using a for loop.
// Test if arr[i] is bigger than the element in front of it.
// If it is, change result to false.
// Return result.