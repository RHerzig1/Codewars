// Remove numbers from strings

function stringClean(s) {
  return [...s].filter(character => character < '0' || character > '9').join('')
}

// The parameter will be a string containing upper and lower-case letters, numbers, spaces, and punctuation.
// Return a new string containing all letters except the punctuation.
// "Hello w1o2ld!" -> "Hello world"
// Split s into an array.
// Filter out characters that are not integers. Remember that integers will still be a string data type.
// Join the characters that were filtered.
// Return the joined string.