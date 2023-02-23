// Write function that counts the number of pairs in an array.

function countPairs(arr) {
  const elemCount = {}

  for (const elem of arr) {
    elemCount[elem] = elemCount[elem] + .5 || .5
  }

  let count = 0

  for (const prop in elemCount) {
    count += Math.floor(elemCount[prop])
  }

  return count
}

console.log(countPairs(['blue', 'blue']), 1)
console.log(countPairs(['blue', 'blue', 'red', 'red']), 2)
console.log(countPairs(['blue', 'blue', 'blue', 'blue']), 2)
console.log(countPairs(['blue', 'blue', 'green', 'red']), 1)
console.log(countPairs(['blue']), 0)
console.log(countPairs([]), 0)


// Array of strings. May be empty. Strings may match. All lower case characters.
// Return number of matching pairs of strings in the array.

// Create a cache.
// Iterate through the array, populate the cache with color: #.
// Iterate through the cache, count the total number of gloves, divide by 2. Round down.
// Return the result.