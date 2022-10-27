// Transform string based on whether each character is unique

function recreateString(string) {
  return string.toLowerCase().split('').map((elem, index, array) => array.indexOf(elem) === array.lastIndexOf(elem) ? '(' : ')').join('')
}

console.log(recreateString("din")) // "((("
console.log(recreateString("recede")) // "()()()"
console.log(recreateString("Success")) // ")())())"
console.log(recreateString("(( @")) // "))(("

// The parameter is a string. It contains: uppercase, lowercase, punctuation, spaces, and integers.
// Return a new string. Use ')' to represent characters that appear more than once. Use '(' to represent characters that only appear once.
// Convert the string to lowercase.
// Declare a results array.
// Iterate through the loop using forEach.
// If the character is unique, push '(' to results.
// Else, push ')'.