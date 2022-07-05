// Equal sum from both sides of array
// Provided an array of integers, return the index where the elements on both the left and the right side have an equal sum. Do no include the returned index in the calculations. All sums start at 0 and, if there are multiple answers, return the one with the lowest index.

function findEvenIndex(arr) {  
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(0, i).reduce((a, b) => a + b, 0) == arr.slice(i + 1).reduce((a, b) => a + b, 0)) {
      return i
    }
  }
  return -1
}

// The parameter is an array of positve and negative integers.
// Return the index where both sides equal same sum.
// [4, 3, 2, 1, 2, 3, 4] -> 3
// Create a for...loop to iterate through the array.
// Slice the left side of the array and reduce.
//  If it equals the slice of the right side, reduced, then return that index.
// Else return -1.
// Make sure to work for edge case of index[0] = 0.