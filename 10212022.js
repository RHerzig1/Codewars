// Return the last n even elements of an array

function returnEvenElements(arr, n) {
  arr = arr.filter(elem => elem % 2 === 0)
  return arr.splice(arr.length - n)
}

console.log(returnEvenElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // [4, 6, 8]
console.log(returnEvenElements([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)) // [-8, 26]
console.log(returnEvenElements([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)) // [6]

// Parameter is an array of integers. Never empty. Always whole numbers. Always a number. Always enough even numbers.
// Return an array containing the last n even elements of the array.
// Filter out the even integers.
// Splice and return the last n elements.