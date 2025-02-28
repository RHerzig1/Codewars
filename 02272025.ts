// Letter combinations of a phone number.

function letterCombinations(digits: string): string[] {
  if (digits === "") {
      return [];
  }

  const result: string[] = [];
  const map = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z'],
  };

  // IIFE
  (function mapLetters(str: string) {
      // Base case
      if (str.length >= digits.length) {
          result.push(str);
          return undefined;
      }

      const digit = digits[str.length];

      // Recursive case
      for (const letter of map[digit]) {
          mapLetters(str + letter);
      }

  })("")

  return result;
};

console.log(letterCombinations("23"), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
console.log(letterCombinations(""), []);
console.log(letterCombinations("2"), ["a", "b", "c"]);

// digits: string. 0 <= digit.length <= 4. digits[i] ranges from '2' - '9'.
// Return an array of every letter combination when mapping the numbers to a phone.

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/