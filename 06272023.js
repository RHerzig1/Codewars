// Write a function that returns a Boolean indicating whether a number is a power of 2.

function isPowerOfTwo(n) {
  let count = 2;

  while (count < n) {
    count = count * 2;
  }

  return count === n || n === 1;
}

console.log(isPowerOfTwo(1), true);
console.log(isPowerOfTwo(2), true);
console.log(isPowerOfTwo(3), false);
console.log(isPowerOfTwo(4), true);
console.log(isPowerOfTwo(256), true);
console.log(isPowerOfTwo(1024), true);
console.log(isPowerOfTwo(4096), true);
console.log(isPowerOfTwo(5000), false);

// An integer greater than 0. Always a valid number.
// Return whether or not the parameter is a power of 2.

// Declare a count variable.
// While the variable is less than n, multiple it by 2.
// If the variable equals n, then n is a power of 2.