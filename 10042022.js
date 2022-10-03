 // Replace characters of string with spaces

function replaceCharactersWithSpaces(message, ...rest) {
  if (rest.length === 0) rest = ['S', 'p', 'a', 'c', 'e']
  for (let key of rest) {
    message = message.replaceAll(key, ' ')
  }
  return message
}

replaceCharactersWithSpaces('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters', 'A', '_', 'K', 'E', 'Y', '!')

 // The parameter is a non-empty string containing letters, spaces, and numbers.
 // Return the string after replacing all characters, which also appear in the keys array, with a space.
 // Declare the keys array using either the example provided or the clue from the previous challenge.
 // Iterate through the keys array.
 // For each element, apply the replaceAll() method on the string to replace all occurances of that character with an empty space.
 // Return the string.