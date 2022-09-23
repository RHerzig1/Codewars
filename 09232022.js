// Convert array to comma-separated values (CSV)

function toCsvText(array) {
  return array.map(subarray => subarray.join(',')).join('\n')
}

// The parameter is an array of arrays. All elements are numbers.
// Return all elements as part of a comma separated string, with each subarray seperated by a new line.
// [[1, 2, 3], [4, 5, 6]] -> '1,2,3\n4,5,6'
// Iterate through the parameter.
// Join the elements of each subarray using a comma.
// For the containing array, join each string using '/n'.
// Return the result.