// Write an algorithm that splits the provided array into an array of subarrays.

function chunkArray(arr, size) {
  const result = []

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size)
    result.push(chunk)
  }

  return result
}

console.log(chunkArray(['hello', 'world'], 2), [['hello', 'world']])
console.log(chunkArray(['hello', 'world'], 1), [['hello'], ['world']])
console.log(chunkArray(['hello', 'world'], 4), [['hello', 'world']])
console.log(chunkArray(['hello', 'world', 'my', 'name', 'is', 'bob'], 4), [['hello', 'world', 'my', 'name'], ['is', 'bob']])

// An array of strings. Strings may contain uppercase and lowercase letters. No numbers. No special characters. Array may be empty.
// A whole number >1 indicating the desired length of each subarray.
// Return an array containing subarrays of 'size' length.

// Delcare a results variable equal to an empty array.
// Iterate through the parameter array. Increase i by size increments.
// Use splice to remove elements from the parameter array and push them into result.
// Return result.

// Note: A while loop the continuously splices elements off arr until length <= 0 works, but is not as optimized as using the slice() method. For this reason, a for loop was used.