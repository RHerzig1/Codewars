// Reverse alphabet count to decode message

function reverseAlphabet(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const result = []
  message = [...message]
  
  for (let i = 0; i < message.length; i++) {
    let character = message[i].toLowerCase()
    if (character >= 'a' && character <= 'z') {
      character = alphabet.at(alphabet.indexOf(character) * -1 - 1)
      character = message[i] === message[i].toLowerCase() ? character.toUpperCase() : character
    }
    result.push(character)
  }
  return result.join('')
}

console.log(
reverseAlphabet('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH')
)

// The parameter is a non-empty string containing letters, spaces, and numbers, and an integer.
// Return the string removing reversing the alphabet count, so instead of starting from the beginning, start from the end. In addition, set to opposite casing.
// "Abc" -> "zXY"
// Declare an array of the alphabet.
// Declare an empty result array.
// Split the string.
// Iterate over it using a for loop.
// For each character, find the matching character's index from the alphabet array.
// Multiply that index by -1 and add 1 to find the opposite character in the alphabet.
// Use a ternary operator to convert the casing.
// Push the character into the result array
// After iterating, join the result array.
// Return the final string.