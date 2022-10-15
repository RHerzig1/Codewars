// Reorganize nested arrays while maintaining element relative order

function moveBlankUp(curGrid, blankGrid) {
  for (let i = 1; i < curGrid.length - 1; i++) {
    if (curGrid[i].includes(blankGrid)) {
      let nestedIndex = curGrid[i].indexOf(blankGrid)
      curGrid[i][nestedIndex] = curGrid[i - 1][nestedIndex]
      curGrid[i - 1][nestedIndex] = blankGrid
    }
  }

  // checkWin(gridWithBlank, curGrid);
  return curGrid;
}

function moveBlankDown(curGrid, blankGrid) {
  for (let i = 0; i < curGrid.length - 2; i++) {
    if (curGrid[i].includes(blankGrid)) {
      let nestedIndex = curGrid[i].indexOf(blankGrid)
      curGrid[i][nestedIndex] = curGrid[i - 1][nestedIndex]
      curGrid[i - 1][nestedIndex] = blankGrid
    }
  }

  // checkWin(gridWithBlank, curGrid);
  return curGrid;
}

let array = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

console.log(moveBlankUp(array, 'a'))

// Parameter is a character that appears in the array as a unique element. Mutate the array.
// Return the updated array after moving a nested array up (decrement) or down (increment) an index.
// Iterate through the array.
// If the element (array of strings) contains the key, move it in the desired direction.
// Return the modified array.