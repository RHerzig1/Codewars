// Remove smallest value of array without sorting

function removeSmallest(numbers) {
  let minIndex = numbers.indexOf(Math.min(...numbers))
  return [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)];
}

// The parameter is an array of integers (may be empty).
// Return a copy of the array but with the lowest valued element removed. Do not change the order of the elements. If the array is empty, return an empty array.
// [3, 4, 5, 1, 2] -> [3, 4, 5, 2]
// [] -> []
// Declare a minIndex value equal to the index containing the smallest value.
// Slice the elements before the value and after the value
// Return the sliced values