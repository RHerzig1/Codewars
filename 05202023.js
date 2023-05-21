// Write a function that calculates the factorial of a number, or throws a RangeError if it's out of bounds.

function factorial(n) {
  if (n > 12 || n < 0) {
    throw new RangeError("The argument must be between 0 and 12.");
  }

  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(0), 1);
console.log(factorial(11), 39916800);
console.log(factorial(13), "Error");
console.log(factorial(-1), "Error");

// A positive or negative integer.
// Return the factorial value of the paremeter, or throw a range error if it's less than 0 < num > 12.

// If the number is invalid, throw the error.
// Use recursion to calculate the factorial.
// Base case:
// If num = 0, return 1.
// Recursive case:
// Return num * factorial(num - 1).
