// Sort even and odd numbers in array differently

function sortArray(arr) {
  const arrOdd = arr.filter(elem => elem % 2 !== 0).sort((a, b) => b - a)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr[i] = arrOdd.pop()
    }
  }
  return arr
}

console.log(sortArray([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]
console.log(sortArray([5, 4, 3, 2, 1])) // [1, 4, 3, 2, 5]
console.log(sortArray([3, 4, 2, 1, 5])) // [1, 4, 2, 3, 5]
console.log(sortArray([3, -4, 2, 1, -5])) // [-5, -4, 2, 1, 3]

// Array of numbers. All whole numbers. All number data type. Length > 0. No other funny business.
// Sort the odd numbers in acsending order. Preserve the order of the even numbers.

// Create a an array containing the odd elements.
// Sort the odd element array.
// Loop through the parameter array, anytime we reach an odd number, replace it with the next element from the odd array.
// Return the result.