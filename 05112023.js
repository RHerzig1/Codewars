// Write an algorithm that uses memoization to calculate the nth number of the Fibonacci sequence.

const cache = {
  0: 0,
  1: 1,
};

function calculateFib(num) {
  if (num in cache) {
    return cache[num];
  }
  const result = calculateFib(num - 1) + calculateFib(num - 2);
  cache[num] = result;
  return result
}

console.log(calculateFib(3), 2)
console.log(calculateFib(10), 55)
console.log(calculateFib(12), 144)

// A positive integer greater than 0.
// Return the nth calculation of the Fibonacci sequance as a number.

// Memoization uses an object and recursion to calculate the outcome.
// Declare the cache.
// If num is in the cache, return the value.
// Else, recall the function and add the previous two sums.
// Push the result to the cache.
// Return the result.
