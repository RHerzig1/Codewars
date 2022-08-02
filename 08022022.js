// Replace vowels with numbers and back
// Create two functions, one that replaces vowels with numbers and another to change numbers back to vowels.

function encode(string) {
  string = [...string].map(elem => vowels[elem] || elem)
  return string.join('')
}

function decode(string) {
  string = [...string].map(elem => Object.keys(vowels)[Object.values(vowels).indexOf(Number(elem))] || elem)
  return string.join('')
}

const vowels = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5
}

// A string of lowercase letters.
// Return a string with the vowels replaced by numbers.
// "javascript" -> j1v1scr3pt"
// Declare two functions, encode and decode, and an object to contain the vowel/number pairs.
// In each function, split the string, iterate through each character, and reference the object to replace the character if applicable.
// Return the results.