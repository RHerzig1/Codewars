// Write an algorithm that increments the last elem of an array

function incrementArr(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i] = arr[i] + 1
      break
    }
    else {
      arr[i] = 0
      if (i === 0) {
        arr.unshift(1)
      }
    }
  }
  return arr
}

console.log(incrementArr([1, 2, 3]), [1, 2, 4])
console.log(incrementArr([1, 2, 9]), [1, 3, 0])
console.log(incrementArr([1, 9, 9]), [2, 0, 0])
console.log(incrementArr([9, 9, 9]), [1, 0, 0, 0])

// An array of numbers. Whole numbers. Positive.
// Return the array with the last elem incremented by 1. If the elem becomes 10, increase the next elem.

// Iterate backwards through the array.
// If the elem is less than 9, increment and break.
// Else, if elem is 9, reassign to 0 and continue to the next elem.
// If the last elem is 9, reassign to 0 and unshift 1.
// Return arr.