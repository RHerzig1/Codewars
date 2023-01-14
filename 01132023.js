// Write an algorithm that removes falsey values from an array

function removeFalseyElems(arr) {
  const result =[]

  for (const elem of arr){
    if (elem) {
      result.push(elem)
    }
  }

  return result
}

console.log(removeFalseyElems([0, 1, 2]), [1, 2])
console.log(removeFalseyElems([true, true, false, false]), [true, true])
console.log(removeFalseyElems([null]), [])

// An array containing truthy and falsey values.
// Return a copy of the array with the falsey values removed.

// Declare an empty results array.
// Iterate through the array.
// If the value is truthy, push it to the results array.
// Return the results array.