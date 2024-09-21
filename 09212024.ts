// Convert an integer into Roman numerals.

function intToRoman(num: number): string {
  const result: string[] = [];
  const ints: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  while (num > 0) {
    for (let i = 0; i < ints.length; i++) {
      const int = ints[i];
      const roman = romans[i];

      while (num >= int) {
        num -= int;
        result.push(roman);
      }
    }
  }

  return result.join("");
}

console.log(intToRoman(3749), "MMMDCCXLIX");
console.log(intToRoman(58), "LVIII");
console.log(intToRoman(1994), "MCMXCIV");
// https://leetcode.com/problems/integer-to-roman/

// num: number. 1 <= num <= 3999.
// Return a string representing the number as a roman numeral.
