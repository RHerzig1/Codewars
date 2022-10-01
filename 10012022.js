 // Create mask to hide all but last 4 characters of string

function maskify(cc) {
  return cc.length > 4 ? '#'.repeat(cc.length - 4) + cc.slice(cc.length - 4): cc
 }
 
 // The parameter is a string of any length containing letters, numbers, or spaces.
 // Return the string with all characters, except the last 4, converted to octothorpes.
 // "Hello World!" -> "#######rld!"
 // Get the length of the string.
 // Create a new string of actothorpes using that length - 4.
 // Slice and concatenate the last 4 characters from the parameter with the new string.
 // Return the masked string.