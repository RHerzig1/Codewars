// Encode reoccuring characters and integers

function duplicateEncode(word){
  let string = ''
  word = word.toLowerCase().split('')
  word.forEach(elem => {
    word.indexOf(elem) != word.lastIndexOf(elem) ? string += ')' : string += '('
  })
  
  return string
}

// A string containing only characters or integers.
// Return a count of the characters(case insensitive) and integers that appear more than once.
// Create an empty string.
// Split the lowercase array into an array.
// For each element of the array, test whether there's a duplicate. If so, add '(' to the array. If not, add ')'