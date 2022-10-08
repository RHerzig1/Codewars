// Test equality of arrays with nested arrays.

function arrayEquality(arr1, arr2) {
  arr1 = arr1.flat()
  arr2 = arr2.flat()

  let result = true
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      result = false
      break
    }
  }

  return result
}

arrayEquality([['a','b','c'],['d','e','f'],['g','h','i']], [['a','b','c'],['d','e','f'],['g','h','i']])

// The parameters are two arrays of equal size. Both contain nested arrays, which are also of equal size.
// Return a Boolean that states whether or not the arrays contain equal values.
// [['a','b','c'],['d','e','f'],['g','h','i']], [['a','b','c'],['d','e','f'],['g','h','i']] -> true
// [['a','b','c'],['d','e','f'],['g','h','i']], [['a','B','c'],['d','E','f'],['g','H','i']] -> false
// Flatten both arrays provided by the parameters.
// Declare a results variable equal to true.
// Iteratet through the first array using a for loop.
// Compare each element from arr1 with the corrosponding element from arr2. If they don't match, change result to false and break out of the loop.
// After iterating, return result.