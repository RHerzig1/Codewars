// Write an algorithm that takes an integer and reverses it

function reverseInteger(num) {
  const reversedNumber = parseFloat(String(num).split('').reverse().join(''))
  return (reversedNumber * Math.sign(num))
}

console.log(reverseInteger(12345)) // 54321
console.log(reverseInteger(-12345)) // -54321

// The parameter is always a whole number. May be positive or negative (keep the original sign).
// Return the reversed parameter. It must be a number. Remove insignificant zeros (9 vs 009).

// To reverse the number, convert to string, then array, then reverse, join, and convert back to number. ParseFloat() is used instead of Number() or parseInt() to ensure real numbers are processed correctly.
// Multiple the result by Math.sign, which returns 1 or -1 whether the number is positive or negative respectively.