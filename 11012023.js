// Write a function that sorts an array of strings by their last letter.

function sortLastChar(words) {
  return words.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

console.log(sortLastChar('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
console.log(sortLastChar('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
console.log(sortLastChar('take me to semynak'), ['take', 'me', 'semynak', 'to']);

// A string of words seperated by a space. Only contains lowercase characters and spaces.
// Return an array of words sorted in ascending order by the last character. If the words have the same last letter, they should stay in the same order as the string.

// Split the string into an array.
// Sort the array by last letter.

// Return the result.