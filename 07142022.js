// Count of characters in string
// In a string of characters, count the total number of times each character appears.

function count (string) {  
  const object = {}
  Array.from(string).map(character => object[character] ? object[character] += 1 : object[character] = 1)
  return object
}

// A string of characters. Does case matter?
// Return an object containing each character, and the number of times it appears.
// 'abcab' -> {'a': 2, 'b': 2, 'c': 1}
// Declare an empty object
// Iterate through the string to evaluate each character.
// If the character is not already in the object, then add it.
// Else, add 1 to the value.
// Return the object when iteration is complete.