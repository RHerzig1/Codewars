// Return the result of calling the Fibonacci sequence

function fibonacciSequence(n){
  let arr = [0, 1]

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
    console.log(arr)
  }
  
  return arr[n]
}

console.log(fibonacciSequence(4), 3)
console.log(fibonacciSequence(2), 1)

// An integer > 1. Always a whole number.
// Return the Fibonacci sequence, the sum of the two preceding values.