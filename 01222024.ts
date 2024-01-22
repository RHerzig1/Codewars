// Write a function that converts Roman numerals into an integer.

export function romanToInt(roman: string): number {
  const values: { [index: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total: number = 0;

  for (let i = 0; i < roman.length; i++) {
    const current: number = values[roman[i]];
    const next: number = values[roman[i + 1]] || 0;

    total = current >= next ? total + current : total - current;
  }

  return total;
}

console.log(romanToInt("III"), 3);
console.log(romanToInt("LVIII"), 58)
console.log(romanToInt("CCXLVI"), 246);
console.log(romanToInt("DCCLXXXIX"), 789);
console.log(romanToInt("MCMXCIV"), 1994)
console.log(romanToInt("MMCDXXI"), 2421);

// roman: string. 0 <= roman.length <= 20. Always a string. Always valid roman numerals.
// Return a number that represents the value of the parameter.

// Create an object of each roman numeral and its value.
// Declare a total variable equal to 0.
// Iterate the string. Add or subtract (if the next value is larger) to the total.
// Return the total.
