// You're provided an array of integers. Return the integer that appears an odd number of times.

function findOdd(A) {
  A.sort((a, b) => a - b)
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] != A[i+1]) {
      return A[i]
    }
  }
}

// Parameter is an array of integers.
// Return the integer that appears an odd number of times.
// Sort the array.
// Create a for loop.
// Create a conditional checking whether or not array[i] == array[i + 1].
// If it does not match, return array[i].
// If it does match, increment i += 2.