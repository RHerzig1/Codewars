// Write a functiont the removes nonletter characters from a string and reverses the result.

function modifyString(str) {
  return [...str]
    .filter((char) => char >= "a" && char <= "z")
    .reverse()
    .join("");
}

console.log(modifyString("h1ello!!"), "elloh");

// A string containing lowercase letters, numbers, and puncuation.
// Return the string with all numbers and puncuation returned, and the string reversed.

// Split the string into an array of single characters.
// Filter characters that aren't letters.
// Reverse the array.
// Join and return.
