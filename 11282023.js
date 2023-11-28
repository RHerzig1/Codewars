// Write a function that returns a sorted count of each letter of a string.

function orderedCount(str) {
  const counts = new Map();

  for (const char of str) {
    counts.set(char, counts.get(char) + 1 || 1);
  }

  return Array.from(counts);
}

console.log(orderedCount("bad"), [
  ["b", 1],
  ["a", 1],
  ["d", 1],
]);
console.log(orderedCount("dad"), [
  ["d", 2],
  ["a", 1],
]);
console.log(orderedCount("3211"), [
  ["3", 1],
  ["2", 1],
  ["1", 2],
]);
console.log(orderedCount(""), []);

// A string with length >= 0. May contain uppercase and lowercase characters, numbers, and symbols.
// Return an array containing character/count pairs for each character in the string. Uppercase does not equal lowercase. If the string is empty, return an empty array.

// Declare a cache to store the char/count pairs.
// Convert object to array.
// Sort by count.
// Return the final array.
