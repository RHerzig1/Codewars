// Shuffle nested elements of array in place

function shuffleSubArrays(array) {
  const random = []
  const result = []
  const length = array.length
  const nestedLength = array[0].length
  array.flat().forEach(elem => {
    random.splice(Math.floor(Math.random() * length * nestedLength), 0, elem)
  })
  while (random.length > 0) {
    let subString = random.splice(0, nestedLength)
    result.push(subString)
  }
  return result
}

function shuffleSubArrays(array) {
  const nestedLength = array[0].length
  let result = []
  let random = array.flat().sort(() => Math.random() - 0.5);
  while (random.length > 0) {
    let subString = random.splice(0, nestedLength)
    result.push(subString)
  }
  return result
}

shuffleSubArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
shuffleSubArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

// Parameter is an array of arrays. Inside each nested array are primitive values, such as numbers or strings.
// Return the array with all the elements nested inside each array shuffled as randomly as possible.
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> [[4, 8, 1], [2, 7, 9], [5, 3, 6]]

// Determine the number of elements.
// Assign a random number.
// Use that number to move the elements into an array.
// Return the array.