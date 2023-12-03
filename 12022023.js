// Write a function that inserts spaces between each character of a string.

function spacify(str) {
  const result = [];

  for (const char of str) {
    result.push(char, " ");
  }

  return result.join("").trim();
}

console.log(spacify("hello world"), "h e l l o   w o r l d");
console.log(spacify("12345"), "1 2 3 4 5");

// A string containing uppercase and lowercase letters, numbers, or symbols.
// Return a string with a space inserted between each character.

// Declare a result array.
// Iterate through the string. Push each character to the array followed by a space.
// Join, trim, and return the new string.
