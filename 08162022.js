// Find lowest valued integer from array that's larger than parameter
// Return the index of the lowest valued element from the given array that's still larger than the given integer.

function leastLarger(a,i) {
  const threshold = a[i]
  let minLarge = a.filter(elem => elem > threshold).sort((a, b) => a - b)
  let index = a.findIndex(elem => elem === minLarge[0])
  return index
}

// The parameters are an array of integer and a stand-alone integer.
// Return an index from the arrray.
// [4, 1, 3, 5, 6], 0 ->  3
// Declare a threshold variable with a value of a[i].
// Declare a results variable with a value of -1.
// Filter all elements less than or equal to threshold and sort.
// Reassign results to the original index of the zeroth index of the filter/sorted array.
// Return results.