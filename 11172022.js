// Return elements of average string length

function averageLength(arr) {
  let average = Math.round(arr.reduce((a, c) => a + c.length, 0) / arr.length)  
  return [...arr].map(elem => elem[0].repeat(average))
}

console.log(averageLength(['a', 'b', 'c'])), // ['a', 'b', 'c']
console.log(averageLength(['a', 'bb', 'ccc'])), // ['aa', 'bb', 'cc']
console.log(averageLength(['a', 'b', 'ccccccc'])), // ['aaa', 'bbb', 'ccc']
console.log(averageLength(['a', 'b', 'cc'])) // ['a', 'b', 'c'] Round down to average of one.

// An array of strings. Length > 1. Nothing funny.
// Return a new array where the length of each element is the average length of all elements.

// Find the average.
// Iterate through the array.
// Count the length of element.
// Add it to a total and divide by total array length.

// Create a new array and return the average.
// element[0] or 'aaa'.length = 1
// Iterate through the array.
// Apply the repeat method on each element.