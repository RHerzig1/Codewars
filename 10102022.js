// Move element of array left or right

function moveElementLeft(array, element) {
  const index = array.indexOf(element)
  array.splice(index, 1)
  array.splice(index - 1, 0, element)
  return array
}

moveElementLeft([1, 2, 3, 4, 5, 6, 7], 4)

function moveElementRight(array, element) {
  const index = array.indexOf(element)
  array.splice(index, 1)
  array.splice(index + 1, 0, element)
  return array
}

moveElementRight([1, 2, 3, 4, 5, 6, 7], 4)

// The parameters are an array containing unique elements and the value of one of those elements.
// Return the mutated array with the selected element moved left or right 1 index, determined by the function called.
// [1, 2, 3, 4, 5], 4 -> [1, 2, 3, 5, 4]
// [1, 2, 3, 4, 5], 4 -> [1, 2, 4, 3, 5]
// Identify index of provided element.
// Splice that element from the array.
// Add the element back into the array using index + 1 (right) or index - 1 (left)
// Return the array.