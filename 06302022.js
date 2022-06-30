// Remove contiguous duplicates from array
// Return the provided array with all contiguous duplicates removed. Keep it sorted

function uniqueInOrder(iterable){
  return iterable.filter((elem, index) => elem != iterable[index - 1]).join('')
}

// Parameter is an array containing several elements, several of which may repeat.
// Return the a string without the contiguous repeated characters.
// Create a new array. Its value will be the parameter filtered to not include elements identical to the previous.
// Join the array.
// Return the result.