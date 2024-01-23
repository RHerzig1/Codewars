// Write a function that converts an integer into Roman numerals.

export function intToRoman(num: number): string {
  const result: string[] = [];
  const ints: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  while (num > 0) {
    for (let i = 0; i < ints.length; i++) {
      if (ints[i] <= num) {
        num -= ints[i];
        result.push(roman[i]);
        break;
      }
    }
  }

  return result.join("");
}

console.log(intToRoman(3), "III");
console.log(intToRoman(58), "LVIII");
console.log(intToRoman(246), "CCXLVI");
console.log(intToRoman(789), "DCCLXXXIX");
console.log(intToRoman(1994), "MCMXCIV");
console.log(intToRoman(2421), "MMCDXXI");

// num: number. 0 <= num <== 2500. Always a valid number. Always a positive integer.
// Return a string representing the Roman numeral equivelant of the parameter.

// Declare a results array.
// Declare an ints array containing values greatest to least.
// Declare a roman array containing values greatest to least.
// While num > 0, subtract the largest roman possible. Add that roman to the results array.
// Join and return the result.
