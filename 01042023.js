// Use recursion and memoization to calculate the nth number of Fibonacci sequence

const memo = []
function calculateFibonacci(n) {
    if (memo[n]) return memo[n];
    if (n < 2) return n;
    const result = calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
    memo[n] = result;
    return result;
}

console.log(calculateFibonacci(3), 2)
console.log(calculateFibonacci(10), 55)
console.log(calculateFibonacci(12), 144)

// A whole number 0 or greater.
// Return the result of calculating the Fibonacci sequence starting with n.

// Declare a memoization cache outside the function.
// If memo contains the value for n, return it.
// If n is less than 2, return n.
// Else, calculate the correct value, cache it, and return it.