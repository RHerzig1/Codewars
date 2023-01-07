// Write an algorithm that calculates Pascals triangle

function pascal(depth) {
  const result = [[1]]

  while (result.length < depth) {
    const rowCount = result.length
    const row = []

    for (let i = 0; i <= rowCount; i++) {
      if (i === 0 || i === rowCount) {
        row.push(1)
      }
      else row.push(result[rowCount - 1][i - 1] + result[rowCount - 1][i])
    }
    result.push(row)
  }

  return result
}

console.log(pascal(5), [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ])

// An integer. Whole number, always 1 or greater.
// Return an array of arrays containing the digits that build Pascals triangle.

// Declare result equal to an empty array.
// Declare a while loop that runs until result.length === depth.
// Each iteration should push a new array (row) into the result.
// Return result.