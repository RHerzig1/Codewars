// Write a function that returns the nth number in the Fibonacci sequence.

function nthFibo(n) {
  const cache = [0, 1]
  for (let i = 2; i <= n; i++) {
    cache.push(cache[i - 1] + cache[i - 2])
  }
  return cache[n - 1]
}

console.log(nthFibo(1), 0)
console.log(nthFibo(2), 1)
console.log(nthFibo(3), 1)
console.log(nthFibo(4), 2)
console.log(nthFibo(10), 34)

// An integer greater than 0.
// Return the Fibonacci value at that index. Start with [0, 1]

// Declare a cache equal to [0, 1]
// Iterate through the cache. Add the last two values and push.
// Return the last value.