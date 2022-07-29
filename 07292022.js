// Reverse sets of binary data
// Given an array of 1s and 0s, reverse the order of each 8-bit section while preserving the values within. 

function dataReverse(data) {
  const result = []
  for (let i = 0; i < data.length; i += 8) {
    let array = data.filter((elem, index) => index >= i && index <= i + 7)
    result.unshift(...array)
  }
  return result
}

// An array of 1s and 0s.
// Return an array with the same binary meanings, but reverse the order.
// [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] -> [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
// Declare a results variable, assign it an empty array.
// Write a for loop that stops at ever 8th index in the data parameter.
// At each 8th index, filter the indexes that make up that binary group.
// Paste the filtered binary set to the beginning of the results array.
// Return the result.