// Write a function that takes a string of words and reverses every word with a length greater than 5

function spinWords(string){
  let arr = string.split(' ').map(word => word.split(''))
  arr = arr.map(wordArr => {
    if (wordArr.length >= 5) {
      wordArr = wordArr.reverse()
    }
    return wordArr.join('')
  })
  return arr.join(' ')
}

console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw")
console.log(spinWords("This is a test"), "This is a test")
console.log(spinWords("This is another test"), "This is rehtona test")

// A string of one or more words. Never empty. All words seperated by a single space. No trailing spaces.
// Return a string where all words with a length of 5 or greater reversed.

// Split the string into a array of words.
// Iterate through the array, split each word into an array of letters.
// Iterate through the array again, if length  >= 5 reverse, join word
// Join whole string and return