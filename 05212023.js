// Write a function that sorts an array by string length.

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["a", "ab", "bbb"]), ["a", "ab", "bbb"]);
console.log(sortByLength(["aaa", "bb", "c"]), ["c", "bb", "aaa"]);

// An array of strings. All strings are different lengths.
// Return the array sorted by shortest length to longest.

// Use the sort() method.
