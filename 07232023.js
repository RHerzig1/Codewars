// Write a function that decipher's a scrambled string using ROT13.

function rot13(str) {
  const result = [];

  for (const char of str) {
    if (char >= "a" && char <= "z") {
      const charCode = char.charCodeAt(0) + 13;
      result.push(
        String.fromCharCode(charCode <= 122 ? charCode : charCode - 26)
      );
    } else if (char >= "A" && char <= "Z") {
      const charCode = char.charCodeAt(0) + 13;
      result.push(
        String.fromCharCode(charCode <= 90 ? charCode : charCode - 26)
      );
    } else {
      result.push(char);
    }
  }

  return result.join("");
}

console.log(rot13("Uryyb Jbeyq!"), "Hello World!");

// A string of uppercase and lowercase letters, numbers, and special characters.
// Apply ROT13 (rotation 13) to each alphabetical letter, leaving numbers and special characters the same.

// Declare a results array.
// Iterate through the string.
// If the character is a letter, add 13 to the charcode.
// If the charcode is above 13, subtract 26.
// Convert the charcode into a letter and push into the array.
// If the character is not a letter, push it to the array as is.
// Join and return.