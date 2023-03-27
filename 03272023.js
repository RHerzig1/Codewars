// Write a function that counts the number of words in a string with edge cases

function countWords(str) {
  const arr = str.split(" ").filter((elem) => elem !== "");
  return arr.length;
}

console.log(countWords('hello'), 1)
console.log(countWords('hello world'), 2)
console.log(countWords('hello     world'), 2)
console.log(countWords('    hello     world   '), 2)
console.log(countWords('       '), 0)
console.log(countWords(''), 0)

// A string of words seperated by at least 1 space. String may be empty or contain only spaces.
// Return the count of words.

// Split the string into an array.
// Filter out empty elems from extra spaces in string.
// Return length.