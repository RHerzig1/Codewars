// Write an algorithm that capitalizes the first letter of every word in a string

function capitalizeEveryFirstLetterOfWord(str) {
  let wordArr = str.toLowerCase().split(' ')
  let capsArr = wordArr.map(word => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return capsArr.join(' ')
}

console.log(capitalizeEveryFirstLetterOfWord('hello world'), 'Hello World')
console.log(capitalizeEveryFirstLetterOfWord('hELLO wORLD'), 'Hello World')

// A string containing words seperated by spaces. Mix of uppercase and lowercase letters. No special characters or numbers. Never empty.
// Return the string with only the first letter of every word capitalized.

// Transform the string into lowercase.
// Split the string into an array so each word is an element.
// Capitalize the first letter of every word, then slice on the rest of the string.
// Join and return the array.