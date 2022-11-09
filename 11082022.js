// Test whether an integer is a perfect number

function isPerfect(n) {
  let sum = 1
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      if (i * i != n) sum = sum + i + n / i;
      else sum = sum + i;
    }
  }
  if (sum == n && n != 1) return true
  return false
}

// isPerfect(28) // true (1, 2, 4, 7, 14)
// isPerfect(36) // false (1, 2, 3, 6, 12, 18)


// A whole number. Always >= 1. Never a string. Never empty. Nothing else funny.
// Return true or false, if it's a whole number.

// Declare a results integer
// Loop through n
// If i divides evenly, push it to an array.
// Use ternary to check whole number