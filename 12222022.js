// Write an algorithm that returns the longest word in a string.

function returnLongestWord(str) {
  let wordArray = str.split(' ')
  let result = ''

  for (const word of wordArray) {
    if (word.length > result.length) {
      result = word
    }
  }

  return result
}

console.log(returnLongestWord('Hello my name is Bob Labowski'), 'Labowski')
console.log(returnLongestWord('Hello world'), 'Hello')
console.log(returnLongestWord('Hello'), 'Hello')
console.log(returnLongestWord(''), '')

// A string containing words seperated by a space. Length may be 0 or greater. Characters may be uppercase or lowercase. No numbers or special characters.
// Return the longest word found in the string. If words share the same length, return the word that occurs sooner. If the string is empty, return an empty string.

// Split the string into an array where every word is an element.
// Declare an empty result array.
// Iterate through the array. If the word length is longer than result length, replace the value of result with the word.
// After iterating, return result.