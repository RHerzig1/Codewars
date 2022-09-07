// Restore string using partial strings
// Using the array of strings provided, replace any asterisks with the letter found in one of the other strings.

function assembleString(array){
  if (!array[0]) return ''
  const result = array[0].split('')
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '*') {
      for (let string of array) {
        if (string[i] != '*') {
          result[i] = string[i]
          break
        }
      }
    }
    if (result[i] === '*') result[i] = '#'
  }
  return result.join('')
}

// The parameter is an array of strings.
// Return a string with no asterisks.
// ["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"]) -> "Hello, World!"
// Declare a result variable equal to array[0].
// Use a for loop to iterate through each character in result.
// If the character is an asterisk, iterate through the array and use that index to find a replacement character.
// Set result[i] to equal that character.
// When result finished iterating, join the array and return it.