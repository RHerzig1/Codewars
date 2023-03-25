// Write a recursive algorithm that determines whether or not a number is a happy number.

function isHappy(n, cache = {}) {
  if (n === 1) return true;
  if (cache[n] === true) return false;
  cache[n] = true;

  n = Array.from(String(n))
    .map(Number)
    .reduce((a, c) => a + c ** 2, 0);
  return isHappy(n, cache);
}

console.log(isHappy(19), true);
// 1 + 81 = 82
// 64 + 4 = 68
// 36 + 64 = 100
// 1 + 0 + 0 = 1
console.log(isHappy(2), false);

// A positive integer.
// A boolean indicated if the integer is a happy number. If a sum repeats, return false.
// A happy number is an integer that eventually equals 1 when each digit is squared and added together.

// Base condition:
// If n equals 1, return true.
// If n is stored in the cache, return false.

// Recursive condition:
// Reassign n.
// Apply to cache.
// Call isHappy and pass through n and cache.
