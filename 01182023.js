// Use recursion to calculate the factorial of an integer.

function calculateFactorial(num) {
  if (num <= 0) return 1
  return num * calculateFactorial(num - 1)
}

console.log(calculateFactorial(5), 120)
console.log(calculateFactorial(6), 720)
console.log(calculateFactorial(0), 1)
console.log(calculateFactorial(1), 1)

// A non-negative integer. Whole number.
// Return the result of the factorial calculation. A whole number. Factorial of 0 === 1.

// Return factorial(num - 1) * n
// If num = 0 return 1.