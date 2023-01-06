// Use a for loop and cache to calculate the nth number of Fibonacci sequence

function calculateFibonacci(n) {
  const cache = [0, 1]
  for (let i = 2; i <= n; i++) {
    cache.push(cache[i - 1] + cache[i - 2])
  }
  return cache.at(-1)
}

console.log(calculateFibonacci(3), 2)
console.log(calculateFibonacci(10), 55)
console.log(calculateFibonacci(12), 144)

// A whole number 0 or greater.
// Return the result of calculating the Fibonacci sequence starting with n.

// Declare the cache, starting with values of 0 and 1.
// Using a for loop, iterate up and build the cache until i = n.].
// Each iteration should add the previous two values and push it to the end of the cache.
// Return the last element of the cache.