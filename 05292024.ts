// Write a function that returns the number of ways to climb up n steps.

// Iterative
function climbStairs(n: number): number {
  const arr = [0, 1];

  for (let i = 0; i < n; i++) {
    arr.push(arr.at(-1) + arr.at(-2));
  }

  return arr.at(-1);
}

// Recursive
function climbStairs(n: number): number {
  const values = {
    0: 0,
    1: 1,
  };

  function fib(n: number): number {
    if (n <= 1) {
      return 1;
    }

    if (Object.hasOwn(values, n)) {
      return values[n];
    }

    const sum = fib(n - 1) + fib(n - 2);
    values[n] = sum;

    return sum;
  }

  return fib(n);
}

console.log(climbStairs(2), 2);
console.log(climbStairs(3), 3);
console.log(climbStairs(45), 1836311903);
// https://leetcode.com/problems/climbing-stairs/

// n: number. 1 <= n <= 45.
// Return the number of distinct ways to reach the top, if you climb 1 or 2 steps at a time.

// The total is just the Fibonacci. Calculate the value after nth iterations.
