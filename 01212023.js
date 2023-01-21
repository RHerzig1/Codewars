// Use a map to remove duplicate elements from an array.

function removeDuplicates(arr) {
  const charMap = new Map()
  for (const elem of arr) {
    charMap.set(elem, true)
  }

  const arrUnique = []
  for (const [prop, value] of charMap) {
    arrUnique.push(prop)
  }
  return arrUnique
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5]), [1, 2, 3, 4, 5])
console.log(removeDuplicates(['one', 'two', 'two', 'two', 'two', 'two', 'three']), ['one', 'two', 'three'])

// An array of strings or numbers. Always length > 1. May contain duplicate values.
// Use a map to return an array with all the duplicate values removed.

// Create a charMap.
// Iterate through the array, push each value to the map.
// Iterate through the map, push each value to a new array.
// Return the new array.