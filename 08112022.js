// Build a customizable Fibonacci function
// Write a Fibonacci function, that takes a signature array of x length, adds the last x elements, and pushes the sum into the array. Repeat n times.

function Xbonacci(signature, n){
  const length = signature.length
  while (signature.length < n) {
    let sum = signature.slice(-length).reduce((a, b) => a + b, 0)
    signature.push(sum)
  }
  return signature.slice(0, n)
}

// Parameter signature is an array. All elements create the first sum, and the length dictates how many elements to add through each iteration. N is the total number of elements the array should have before being returned.
// Return an array of n length.
// [0,1], 10 -> [0,1,1,2,3,5,8,13,21,34]
// Declare variable length equal to the signature length.
// While the signature length is less than n, find the sum of the last length elements and push it to the signature.
// Return the signature.