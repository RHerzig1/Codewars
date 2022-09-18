// Add length property to each element of array

function addLength(str){
  return str.split(' ').map( (elem) => `${elem} ${elem.length}`)
}

// Parameter is a string of words seperated by spaces.
// Return the an array with each element containing the length of each word attached to the end of the word.
// 'hello world' -> ['hello 5', 'world 5']
// Split the parameter so each word is an element.
// Apply the map() method to each element.
// In the callback, return the element plus ' ' plus the length of the array.
// Return the array