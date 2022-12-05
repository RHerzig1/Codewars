// Create a character map from a string

function characterMap(str) {
  const characterMap = {}

  for (let i = 0; i < str.length; i++) {
    Object.hasOwn(characterMap, str[i]) ? characterMap[str[i]]++ : characterMap[str[i]] = 1
  }

  return characterMap
}

console.log(characterMap('aba')) // {'a': 2, 'b': 1}
console.log(characterMap('')) // {}

// A string of chars. May contain letters or numbers. May be uppercase or lowercase. May be empty.
// Return a character map. Empty strings return as {}.

// Declare characterMap equal to empty object.
// Iterate through each character of the array.
// Assign a new property = 1, or 1++ existing property.
// Return the object.