// Write an algorithm that uses tabulation to calculate the nth number of the Fibonacci sequence.

export function nthFib(num: number): number {
  const cache: number[] = [0, 1];

  for (let i = 2; i < num; i++) {
    const sum: number = cache[cache.length - 1] + cache[cache.length - 2];
    cache.push(sum);
  }

  return cache[num - 1];
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

// Declare an array to cache the results.
// Loop through to the numth number to calculate the total.
