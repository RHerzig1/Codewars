// Find the nth smallest element of an array

function nthSmallest(arr, n) {
 return arr.sort((a, b) => a - b)[n - 1]
}

console.log(nthSmallest([3, 1, 2], 2)) // 2
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3)) // 7
console.log(nthSmallest([177, 225, 243, -169, -12, -5, 2, 92], 5)) // 92

// The parameter is an array of integers. Array length is at least 3. They are are positive, negative, or zero. All numbers. All whole numbers. The parameter includes a whole, positive number. The array will always be long enough to satisfy the problem. Do not remove duplicate numbers from the array.
// Sort and return the nth number of the array.
// Sort the array.
// Return arr[n]