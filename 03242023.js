// Write an iterative algorithm that determines whether or not a number is a happy number.

function isHappy(n) {
  const cache = {};

  while (n > 1 && !cache[n]) {
    cache[n] = true;
    const arr = Array.from(String(n)).map(Number);
    n = Number(arr.reduce((a, c) => a + c ** 2, 0));
  }

  return n === 1;
}

console.log(isHappy(19), true)
// 1 + 81 = 82
// 64 + 4 = 68
// 36 + 64 = 100
// 1 + 0 + 0 = 1
console.log(isHappy(2), false)

// A positive integer.
// A boolean indicated if the integer is a happy number. If a sum repeats, return false.
// A happy number is an integer that eventually equals 1 when each digit is squared and added together.

// Create a cache.
// Loop through applying the calculations.
// If the number is 1 or a number is repeated, break the loop.
// Return number === 1.