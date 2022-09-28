// Implement line numbering in array

const number = function(array) {
  return array.map((elem, index) => `${index + 1}: ${elem}`)
}

// The parameter is an array containing strings.
// Return the array with each element prefaced by a number. If the array was empty, return an empty array.
// ["a", "b", "c"] -> ["1: a", "2: b", "3: c"]
// Map through the array.
// For each iteration, concatenate index + 1 to the element.
// Return the modified array.