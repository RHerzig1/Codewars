// Reduce array and convert number to binary

function arr2bin(arr){
  return arr.filter(elem => typeof elem === 'number').reduce((a, b) => a + b, 0).toString(2)
}

// The parameter is an array containing numbers and strings.
// Return the binary value (as a string) of the sums of the numbers. Any elements that are not numbers equal 0.
// [1, 2, 3, 4, 5] -> 1111
// Filter values that are not numbers from the array.
// Reduce the array to find the sum.
// Convert the sum to binary.
// Return the binary value.