// Using a Set, remove elements of an array by filtering a second array

function arrayDiff(a, b) {
  if (a.length === 0 || b.length === 0) return a
  const newSet = new Set(b)
  return a.filter(n => !newSet.has(n))
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2])), // [1, 3]
console.log(arrayDiff([], [4, 5])), // []
console.log(arrayDiff([3, 4], [3])), // [4]
console.log(arrayDiff([1, 8, 2], [])) // [1, 8, 2]

// Two arrays containing whole, positive numbers. Either may be empty.
// Use the latter array to remove elements from the former. Keep the element order. Return the filtered array.

// Loop through the array.
// Filter any elements that aren't in the 2nd array.
// Return the new list.