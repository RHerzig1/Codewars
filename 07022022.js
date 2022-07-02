// Calculate the Tribonacci Sequence
// Create a function that calculates the tribonacci sequence to n number of times.

function tribonacci(signature,n){
  const tribonacciArray = []
  
  for (let i = 0; i < n; i++) {
    if (i < signature.length) {
      tribonacciArray.push(signature[i])
    }
    else {
      tribonacciArray.push(tribonacciArray[i - 1] + tribonacciArray[i - 2] + tribonacciArray[i - 3])
    }
  }
  
  return tribonacciArray
}

// Parameters are the starting signature (array containing 3 elements) and the number of values to calculate.
// Return an array containing the sequence, starting with the initial 3 values and ending with (including) the nth value.
// If n is less than the array, return the elements. 
// Add the last 3 sums of the array, push to the array.
// Return the array.