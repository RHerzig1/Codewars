// Write an algorithm that, given an array and integer, returns the index at which the integer should appear in the sorted array.

function returnIndexOfNum(arr, num) {
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) index++
    else break
  }
  return index
}

console.log(returnIndexOfNum([1, 2, 3, 5], 4), 3)
console.log(returnIndexOfNum([1, 2, 3, 4, 5], 0), 0)
console.log(returnIndexOfNum([1, 2, 3, 4, 5], 6), 5)
console.log(returnIndexOfNum([1, 2, 3], 2), 1)
console.log(returnIndexOfNum([], 1), 0)


// An array of numbers. All whole numbers. Positive. Length 0 or greater. Array will already be sorted in ascending order.
// An integer. Always a whole number. Positive. Parameter will never be empty.
// Return the index of the num if it were placed and sorted inside the array.

// Declare an index variable assigned to 0.
// Iterate through the array.
// If the num parameter is bigger than the element, increment index plus 1.
// Else break the loop.
// Return index