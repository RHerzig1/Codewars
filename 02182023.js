// Write an algorithm that converts an array of words into a sentence.

function formatWords(words){
  if (!words) return ''
  words = words.filter(word => word !== '')
  if (words.length >= 2) words.splice(words.length - 1, 0, 'and')
  if (words.length >= 4) words = words.map((word, index) => {
    if (index <= words.length - 4) return word + ','
    else return word
  })
  return words.join(' ')
}

console.log(formatWords(['one', 'two', 'three']), 'one, two and three')
console.log(formatWords(['one', '', 'three']), 'one and three')
console.log(formatWords(['one']), 'one')
console.log(formatWords([]), '')

// An array of strings. May be empty, or have empty elements.
// Return a string that contains the words as an English list. Ignore empty elements and if the array is empty then return an empty string.

// If the array has a length of 2 or more, push 'and' in the length - 2 index.
// If the array has now has a length of 4 or more, concatenate ',' at the end of all elements with an index less than length - 3.
// Join and return.