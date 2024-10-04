// Harshad number.

function sumOfTheDigitsOfHarshadNumber(x: number): number {
  const arrayOfDigits = String(x).split("").map(Number);
  const sumOfDigits = arrayOfDigits.reduce((a, c) => a + c, 0);
  const harshadNumber = x % sumOfDigits === 0 ? sumOfDigits : -1;

  return harshadNumber;
}

console.log(sumOfTheDigitsOfHarshadNumber(18), 9);
console.log(sumOfTheDigitsOfHarshadNumber(23), -1);
// https://leetcode.com/problems/harshad-number/

// x: number. 1 <= x <= 100.
// Return the Harshad number of the parameter, or -1 if none exists.
//   A Harshad number is the result of dividing the sum of digits of x by x itself.
