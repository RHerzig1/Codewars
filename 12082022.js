// Return the most frequent char from a string

function max(str) {
  const characterMap = {}
  for (const char of str) {
    characterMap[char] ? characterMap[char]++ : characterMap[char] = 1
  }

  let mostFrequentChar = ''
  let mostFrequentCharCount = 0
  for (const char in characterMap) {
    if (characterMap[char] > mostFrequentCharCount) {
      mostFrequentCharCount = characterMap[char]
      mostFrequentChar = char
    }
  }
  
  return mostFrequentChar
}

console.log(max('Hello World!'), 'l')
console.log(max('Dogs are niceeee.'), 'e')

// A string of characters, including uppercase and lowercase letters, spaces, and puncuation.
// Return the most commonly occuring character.

// Create a character map