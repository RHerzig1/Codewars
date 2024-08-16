// Add the digits of a number until it produces a single digit.

function addDigits(num: number): number {
  while (num > 9) {
      const values = [...String(num)].map(Number);
      num = values.reduce((a, c) => a + c, 0);
  }

  return num;
};

console.log(addDigits(38), 2);
console.log(addDigits(0), 0);
// https://leetcode.com/problems/add-digits/

// num: number. 0 <= num <= 2^31 - 1.
// Return the sum after adding each digit repeatedly until the sum is <= 9.