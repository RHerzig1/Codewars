// Write a function that adds alphabetical letters.

function addLetters(...arr) {
  const CHAR_CODE_A = 96;
  const num = arr.map((elem) => elem.charCodeAt(0) - CHAR_CODE_A).reduce((a, c) => a + c, 0);
  return String.fromCharCode((num % 26 || 26) + CHAR_CODE_A);
}

console.log(addLetters("a", "b", "c"), "f");
console.log(addLetters("y", "c", "b"), "d");
console.log(addLetters("b"), "b");
console.log(addLetters(), "z");

// Lowercase letters in a form of strings. 0 <= number of parameters <= 5. Always valid.
// Return the "sum" of the letters. Overflow returns back to "a". If no parameters exist, return "z".

// Convert each letter into a number.
// Subtract charCode for "a".
// Reduce the array.
// Use modulus to remove overflow.
// Add charCode for "a" and convert.
