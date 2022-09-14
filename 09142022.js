// Create cascading array subsets of n length

function eachCons(array, n) {
	const result = []
  for (let i = 0; i <= array.length - n; i++) {
    result.push(array.slice(i, n + i))
  }
  return result
}

// The parameters are an array of integers and a number.
// Return the array, but split the elements into subsets. The length is defined by the second parameter.
// Declare a result variable and set it equal to an empty array.
// In a for loop, push the subsets into result.
// Return result.