// Reorganize nested arrays while maintaining element relative order

function moveUp(key) {
  myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
  let array = []
  let index = 0
  for (let i = 0; i < myGrid.length - 1; i++) {
    if (myGrid[i].includes(key) && i != 0) {
      array = myGrid.splice(i, 1).flat()
      index = i
    }
  }

  myGrid.splice(index - 1, 0, array)
  return myGrid
}

function moveDown(key) {
  myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
  let array = []
  let index = 0
  for (let i = 0; i < myGrid.length - 1; i++) {
    if (myGrid[i].includes(key) && i != myGrid.length - 1) {
      array = myGrid.splice(i, 1).flat()
      index = i
    }
  }

  myGrid.splice(index + 1, 0, array)
  return myGrid
}

moveUp('e')
moveDown('e')

// Parameter is a character that appears in the array as a unique element. Mutate the array.
// Return the updated array after moving a nested array up (decrement) or down (increment) an index.
// Iterate through the array.
// If the element (array of strings) contains the key, move it in the desired direction.
// Return the modified array.