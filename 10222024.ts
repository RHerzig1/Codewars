// Create a shift() function to replace digits with characters.

function replaceDigits(s: string): string {
  const arr = [...s];

  for (let i = 1; i < s.length; i += 2) {
      const letter = arr[i - 1];
      const digit = Number(arr[i]);

      arr[i] = shift(letter, digit);
  }

  return arr.join('');
}

function shift(s: string, n: number): string {
  const code = s.charCodeAt(0);

  return String.fromCodePoint(code + n);
}

console.log(replaceDigits("a1c1e1"), "abcdef");
console.log(replaceDigits("a1b2c3d4e"), "abbdcfdhe");
// https://leetcode.com/problems/replace-all-digits-with-characters/

// s: string. 1 <= s.length <= 100. Consists only of lowercase English letters and digits. Always in [letter, number] pattern.
// Return the string after replacing each digit with a letter.
// Use the letter before and offset it by the digit.
