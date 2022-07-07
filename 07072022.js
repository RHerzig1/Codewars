// Sort only the odd elements.
// Provided an array of integers, sort only the odd in ascending order. Leave the even numbers in their place.

function sortArray(array) {
  const oddArray = array.filter(elem => Math.abs(elem) % 2 == 1).sort((a, b) => a - b)
  let oddArrayCounter = 0

  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[i]) % 2 == 1) {
      array[i] = oddArray[oddArrayCounter]
      oddArrayCounter++
    }
  }

  return array
}

// The parameter is an array of positve integers.
// Return the array with the odd elements sorted.
// [5, 6, 1, 3, 4] -> [1, 6, 3, 5, 4]
// Create a new array containing only the odd numbers.
// Sort the new array.
// Loop through the parameter array.
// If the number is odd, replace it with a number from the odd numbers array.
// Return the parameter array.