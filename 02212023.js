// Write an algorithm that reverses subsections of an array.

function selReverse(array, length) {
  if (length === 0) return array
  
  const result = []
  
  for (let i = 0; i < array.length; i += length) {
    const reverse = array.slice(i, i + length)
    result.push(...reverse.reverse())
  }
  return result
}

console.log(selReverse([1,2,3,4,5,6], 2), [2,1,4,3,6,5])
console.log(selReverse([1,2,3,4,5,6], 0), [1,2,3,4,5,6])
console.log(selReverse([1,2,3,4,5,6], 1), [1,2,3,4,5,6])
console.log(selReverse([1,2,3,4,5,6], 10), [6,5,4,3,2,1])

// An array of integers and an integer for length.
// Use the length integer to crease subsections of the array that are reversed.

// Declare a result array.
// Iterate through the parameter array.
// Slice a section using the length, reverse it, and push it into the result array.
// Return the result.