// Write an algorithm that combines two arrays and filters out the duplicate elements.

function mergeArrays(...arrays) {
  let mergedArray = []

  arrays.forEach(array => {
    mergedArray = mergedArray.concat(array)
  })
 
  return mergedArray.filter((elem, index) => mergedArray.indexOf(elem) === index)
}

console.log(mergeArrays([1, 2, 3], [4, 5]), [1, 2, 3, 4, 5])
console.log(mergeArrays([1, 2, 3], [4, 5], [6]), [1, 2, 3, 4, 5, 6])
console.log(mergeArrays([1, 2, 3], [3, 4, 5], [4, 5, 6]), [1, 2, 3, 4, 5, 6])

// At least two arrays containing whole numbers. May be positive or negative. Arrays have a length of at least 1.
// Return a new array containing all elements except for duplicates.

// Use the rest parameter to store all arguments.
// Declare an empty array to store all the elements.
// Iterate through the arguments and concatenate all elements to the previously empty array.
// Iterate through the merged array and filter the first occurance of all elements.
// Return the result.