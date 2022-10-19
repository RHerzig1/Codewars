// Return the average of an array of integers

function getAverage(arr) {
  let average = arr.reduce((a, c) => a + c, 0) / arr.length
  return Math.floor(average)
}

getAverage([2,2,2,2]) // 2
getAverage([1,2,3,4,5,]) // 3
getAverage([1,1,1,1,1,1,1,2]) // 1

// Parameter of integers. Always numbers. Never an empty array. Always a whole number.
// Return the average. Round down to nearest whole number.
// Average = total sum / number of elements
// Find the sum of all elements in the array.
// Divide the sum by the number of elements.
// Round the answer down to nearest whole number.
// Return the outcome.