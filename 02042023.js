// Write an algorithm that returns the length of the last word of a string.

function returnLengthOfLastWord(str) {
  return str.trim().split(' ').at(-1).length
}

console.log(returnLengthOfLastWord('hello world'), 5)
console.log(returnLengthOfLastWord('  hello bob  '), 3)
console.log(returnLengthOfLastWord('hello'), 5)

// A string of words. Each word is seperated by a space. There may be trailing spaces at the end of the string. Length is always contains at least one word.
// Return the length of the last word in the string.

// Trim the string.
// Split the string.
// Return the length of the last elem of the array.