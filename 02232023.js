// Write a function that returns the character with the longest consecutive repetition.

function longestRepetition(str) {
  const [longest] = str.match(/(.)\1*|/g).sort((a, b) => b.length - a.length);
  return [longest[0] || '', longest.length];
}

console.log(longestRepetition('aabbccddd'), ['d', 3])


// A string of characters and numbers. No spaces.
// Return an array containing the character with the longest consecutive repetition and the number of times it appears.

// Create an array for each set of consecutive characters.
// Sort the list by length.
// Return the character and length of the longest array.