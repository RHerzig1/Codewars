// Return the first non-repeating letter of a string in its original casing.

function firstNonRepeatingLetter(str) {
  const charMap = {}
  const strLowerCase = str.toLowerCase()
  for (const letter of strLowerCase) {
    charMap[letter] = charMap[letter] + 1 || 1
  }

  for (let i = 0; i < str.length; i++) {
    if (charMap[strLowerCase[i]]  === 1) return str[i]
  }

  return ''
}

console.log(firstNonRepeatingLetter('stress'), 't')
console.log(firstNonRepeatingLetter('sTreSS'), 'T')
console.log(firstNonRepeatingLetter('aabbccdd'), '')

// A string containing uppercase and lowercase letters. Always a single word with no punctuation.
// Return the first letter of the string that does not repeat (ignore casing). Return the letter in its original casing. If no letters qualify, return an empty string.

// Declare a charMAp object.
// Iterate through the string, count the number of each characters.
// Iterate through the string again, if the count equals 1, return that character.