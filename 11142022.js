// Return index of median integer from array of numbers

function gimme(arr) {
const arrSorted = [...arr].sort((a, b) => a - b)
return arr.indexOf(arrSorted[1])
}

console.log(gimme([1, 2, 3])), // 1
console.log(gimme([3, 1, 2])), // 2
console.log(gimme([10, 1, 1000])) // 0

// Array containing 3 numbers of any order. All whole numbers. All positive. Nothing funny.
// Return the index of the median number.

// Create a copy of the array and sort it.
// Use index [1] to return the median number from arr.