// Return Boolean indicating whether array elements are repeated

function determineRepeatingValues(arr) {
  const charMap = {}

  for (let elem of arr) {
    if (charMap[elem]) {
      return true
    }
    else charMap[elem] = true
  }
  return false
}

console.log(determineRepeatingValues([1, 2, 3, 4, 5, 3]), true)
console.log(determineRepeatingValues([1, 2, 3, 4, 5, 6]), false)
console.log(determineRepeatingValues([4, 5, 1, 2, 3]), false)

// Array of integers. Whole numbers, positive. Length of at least 1.
// Return true if any elements repeat and false if all elements are unique.

// Create a hash map.
// If the value already exists, return false.
// Otherwise return true.