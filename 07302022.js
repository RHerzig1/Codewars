// String encryption v2
// Given a a string of words, perform the following operations: 1. Convert the first letter to its ASCII code. 2. Switch the second and last letter.

const encryptThis = function(text) {
  text = text.split(' ').map(elem => {
    let firstChar = elem.charCodeAt(0)
    let secondChar = elem.charAt(1)
    let lastChar = elem.charAt(elem.length - 1)
    elem = elem.split('')
    elem[1] = lastChar
    elem[elem.length - 1] = secondChar
    elem[0] = firstChar  
    return elem.join('')
  })
  return text.join(' ')
}

// A string of words seperated by a space.
// The same string, but encrypted.
// Split the string into an array so each word is an element.
// For each element, split it again so each character is an element.
// Replace element[0] with its ASCII code.
// Switch elements[1] and [-1].
// Join the word array.
// After iterating through each word, join the text array.
// Return the text string.