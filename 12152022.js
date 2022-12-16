// Given an array of integers, return the element pairs that add to a provided number

function twoSum(arr, sum) {
  const numMap = {}
  const pairArr = []

  for (const elem of arr) {
    const difference = sum - elem
    if (numMap[difference]) {
      pairArr.push([elem, difference])
    }
    else numMap[elem] = true
  }

  return pairArr
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]])
console.log(twoSum([1, 2, 3], 4), [[3, 1]])
console.log(twoSum([1, 2, 3, 4, 5], 9), [[5, 4]])
console.log(twoSum([2, 2, 3], 4), [2, 2])
console.log(twoSum([2, 3], 4), [])

// An array of integers. Always whole numbers, may repeat, length of at least 2.
// A whole number.
// Return an array containing pairs of elements that add to the provided number.

// Declare a numMap.
// Declare a pairArr.
// Iterate through the arr parameter.
// Declare difference and assign num - elem.