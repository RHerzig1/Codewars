// Write a function that transforms the casing of a string based on provided indexes.

function capitalize(str, arr) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    result.push(arr.includes(i) ? str[i].toUpperCase() : str[i]);
  }

  return result.join("");
}

console.log(capitalize("abcdef", [1, 2, 5]), "aBCdeF");
console.log(capitalize("abcdef", [1, 2, 5, 100]), "aBCdeF");
console.log(capitalize("codewars", [1, 3, 5, 50]), "cOdEwArs");
console.log(capitalize("abracadabra", [2, 6, 9, 10]), "abRacaDabRA");
console.log(capitalize("codewarriors", [5]), "codewArriors");
console.log(capitalize("indexinglessons", [0]), "Indexinglessons");

// A string containing only lowercase letters. Length > 0.
// An array containing valid numbers, representing indexes to capitalize. Numbers may exceed the number of characters in the string.

// Iterate through the string using a for loop.
// If the array contains i, capitalize it.
// Push each character to a cache.
// Return.
