// Write a class with methods that can convert a decimal to Roman numeral and Roman numeral to decimal.

class RomanNumerals {
  static toRoman(num) {
    const result = [];
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];

    for (let i = 0; i < decimal.length; i++) {
      while (num >= decimal[i]) {
        result.push(roman[i]);
        num -= decimal[i];
      }
    }

    return result.join("");
  }

  static fromRoman(str) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let total = 0;

    for (let i = 0; i < str.length; i++) {
      const [cur, next = 0] = [
        romanNumerals[str[i]],
        romanNumerals[str[i + 1]],
      ];
      total += Math.max(cur, next);

      if (cur < next) {
        total -= cur;
        i++;
      }
    }

    return total;
  }
}

console.log(RomanNumerals.toRoman(1990), 'MCMXC')
console.log(RomanNumerals.toRoman(2008), 'MMVIII')

console.log(RomanNumerals.fromRoman('MCMXC'), 1990)
console.log(RomanNumerals.fromRoman('MMVIII'), 2008)

// Write a class with two static methods. One takes a number and the other takes a string.
// Return converted value.