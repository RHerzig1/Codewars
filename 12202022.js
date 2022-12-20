// Write an algorithm that returns the longest word in a string.

function longestWord(str) {
  let wordArray = str.split(' ')
  let result = ''

  for (const word of wordArray) {
    if (word.length > result.length) {
      result = word
    }
  }

  return result
}

console.log(longestWord('My name is Elizabeth'), 'Elizabeth')
console.log(longestWord('Hello world'), 'Hello')
console.log(longestWord(''), '')

// A string of words. Casing doesn't matter. Does not contain special characters or numbers. May be empty.
// Return the word with the most characters. If words are the same length, return the first occuring word.

// Split the string into an array so each word is an element.
// Declare result to an empty string.
// Iterate through the word array.
// If the current word 