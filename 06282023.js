// Write a function that uses recursion to calculate a factorial.

function factorial(n) {
  if (n <= 1) {
    return n || 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(0), 1)
console.log(factorial(1), 1)
console.log(factorial(2), 2)
console.log(factorial(3), 6)
console.log(factorial(4), 24)
console.log(factorial(5), 120)

// An integer 0 or greater. Always a valid number.
// Return the factorial of the parameter.

// Base case:
// If n equals 1, return n.
// Recursive case:
// Return n * factorial(n - 1).