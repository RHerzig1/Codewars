// Create a backspace function for strings
// Where the # character appears in a string, use that as a backspace key.

function cleanString(s) {
  const array = [...s]
  const result = []
  let deleteCount = 0
  
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === '#') deleteCount++
    else if (!deleteCount) result.unshift(array[i])
    else deleteCount--
  }
  return result.join()
}

// The parameter is a string of letters and the # character.
// Return a string of characters after the backspace has been applied.
// 'ABC##DEF' -> 'ADEF'
// Split the string into an array.
// Declare an empty results array.
// Declare a deleteCount variable equal to 0.
// Iterate through each element of the split array, backwards.
// If the element is #, then add 1 to the delete count.
// Else if the delete count is not 0, subtract 1.
// Else if the delete count is 0, that element can be added to the results array.
// After iterating, join result and return.