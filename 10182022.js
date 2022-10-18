// Return the sum of string integers and number integers from array

function sumMix(arr) {
  return arr.reduce((a, c) => a + Number(c), 0)
}

sumMix([1, 2, 3, 4, 5]) // 15
sumMix(['1', '2', '3', '4', '5']) // 15
sumMix([1, 2, 3, '4', '5']) // 15

// Array of integers. Integers may be numbers or strings.
// Return the sum. A single integer.
// Convert each element to a number.
// Return the sum of each element of the array.