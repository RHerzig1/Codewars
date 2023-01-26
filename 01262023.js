// Write an algorithm that returns the total perimeter sum of squares created using the Fibonacci sequence

function calculateFibonacciPerimeter(n) {
  if (n === 0) return 4
  const sequence = [1, 1]
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2])
  }
  return sequence.reduce((a, c) => a + c, 0) * 4
}

console.log(calculateFibonacciPerimeter(5), 80)
console.log(calculateFibonacciPerimeter(7), 216)

// A single positive integer representing the number of steps in the Fibonacci sequence.
// Return the total sum of perimeter of the squares created. Whole, positive integer.

// Create a sequence array containing starting values.
// Build up the array by pushing the sum of the last two elements.
// Reduce the whole array.
// Multiply by 4 and return.