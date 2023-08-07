// Write a function that creates the Fibonacci sequence using memoization.

const cache = {
  0: 0,
  1: 1,
};

function calcFibonacci(num) {
  if (Object.hasOwn(cache, num)) {
    return cache[num];
  }

  const val = calcFibonacci(num - 1) + calcFibonacci(num - 2);
  cache[num] = val;
  return val;
}

console.log(calcFibonacci(3), 2);
console.log(calcFibonacci(10), 55);
console.log(calcFibonacci(12), 144);

// A positive integer > 0. Always a valid number.
// Return the Fibonacci sequence value at that index.

// Create a cache.
// Recursive case:
// If the cache has num, return num.
// Base case:
// Calculate num - 1 + num - 2.
// Add it to the cache.
// Return it.