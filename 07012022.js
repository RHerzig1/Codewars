// Arrange strings based off numbers within
// Every word in a string contains a hidden number. Reorder the words so the numbers go from least to greatest within a single string.

function order(words) {
  const orderedWords = []
  words = words.split(' ')
  console.log(words)
  for (let i = 0; i < words.length; i++) {
    const index = parseNum(words[i])
    orderedWords[index] = words[i]
  }
  return orderedWords.join(' ').trim()
}

function parseNum(string) {
  let index = ''
  for (let character of string) {
    if (character >= 0 && character <= 9) {
      index += character
    }
  }
  return index
}

// Parameter is a string containing words with a number inbetween.
// Return a single string containing all the words.
// 'a3re how2 4you Hell1o' -> 'Hell1o how2 a3re 4you'
// Declare an empty array.
// Split the string so each word is an element of the array.
// Loop through the array.
// For each element, parse the number and use it to assign the element, in the correct place, into the new array.
// Join and return the array.