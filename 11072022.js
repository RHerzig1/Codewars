// Return integer missing from array

function findDeletedNumber(arr, mixedArr) {
  return mixedArr.sort((a, b) => a - b).find((elem, index) => elem !== index + 1) - 1 || 0
}


console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5])), // 2, 'Deletion'
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8])), // 5, 'Deletion'
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3])) // 0, 'No deletion'

// Two arrays. First is sorted from 1 - N. Other contains same numbers except any 1. All whole, positive numbers. Arrays may be empty.
// Return the missing integer. If no number is missing, return 0

// If arr.length === mixedArr.length return 0.
// Iterate through mixedArr. If elem === index + 1 continue. Else return index + 1.