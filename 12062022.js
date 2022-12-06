// Return the most frequent character from a string

function characterMap(str) {
  const characterMap = {}

  for (let i = 0; i < str.length; i++) {
    Object.hasOwn(characterMap, str[i]) ? characterMap[str[i]]++ : characterMap[str[i]] = 1
  }

  let maxCharacter = ''
  let maxCharacterCount = 0

  for (let character in characterMap) {
    if (characterMap[character] > maxCharacterCount) {
      maxCharacter = character
      maxCharacterCount = characterMap[character]
    }
  }

  return maxCharacter
}

console.log(characterMap('aba')) // 'a'
console.log(characterMap('')) // ''

// A string of chars. May contain letters or numbers. May be uppercase or lowercase. May be empty.
// Return the most frequent appearing character from the string.

// Declare a characterMap variable equal to an empty object.
// Iterate through each character of the array.
// Assign a new property = 1, or 1++ existing property.
// Declare a maxCharacter variable equal to ''
// Declare a maxCharacterCount variable equal to 0
// Iterate through characterMap.
// If the property value is greater than the maxCharacterCounter, cache the character and the count.
// Return the final maxCharacter.