// Write an algorithm that uses memoization to calculate the nth number of the Fibonacci sequence.

const cache: { [index: string]: number } = {
  0: 0,
  1: 1,
};

export function nthFib(num: number): number {
  if (cache.hasOwnProperty(num)) {
    return cache[num];
  }

  const sum: number = nthFib(num - 1) + nthFib(num - 2);
  cache[num] = sum;
  return sum;
}

console.log(nthFib(1), 0);
console.log(nthFib(2), 1);
console.log(nthFib(3), 1);
console.log(nthFib(4), 2);
console.log(nthFib(5), 3);
console.log(nthFib(8), 13);
console.log(nthFib(100), 218922995834555169026);

// num: number. 0 <= num <= 100. Always a valid integer.
// Return the numth number of the Fibonacci sequence. [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...]

// Use recursion and a global cache.
// Base case:
// If the cache has num, return that value.
// Recursive case:
// Call nthFib(num - 1) + nthFib(num - 2), add to the cache, and return it.