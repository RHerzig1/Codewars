// Convert string to PascalCase
// For the provided string, capitalize the first letter of every word and remove all spaces.

String.prototype.camelCase=function() {
  if (this.length === 0) return ''
  let array = this.trim().toLowerCase().split(' ')
  array = array.map(element => {
    let word = element.slice(1) 
    let letter = element.slice(0, 1).toUpperCase()
    return letter + word
  })
  return array.join('')
}

// Parameter is a string.
// Return the string, but with PascalCase capitalization and spaces removed.
// 'Hello world' -> 'HelloWorld'
// Trim the string and make it lower case.
// Split the string into an array by word.
// For each element, capitalize the first.
// Join the array into a single string.
// Return the new string.