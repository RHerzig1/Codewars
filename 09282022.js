// Return count of array elements that don't contain 5

function dontGiveMeFive(start, end) {
  const array = []
  for (let i = start; i <= end; i++) {
    if (!String(i).includes('5')) {
      array.push(i)
    }
  }
  return array.length
}

// The parameters are an inclusive starting number and an inclusive ending number.
// Fill the array using the parameters except for numbers including 5. Return the length of the array.
// 1, 9 -> 8
// Delcare an empty array.
// Iterate through the array with a for loop.
// For each iteration, push the i into the array as long as it doesn't contain 5.
// Return the length of the array.