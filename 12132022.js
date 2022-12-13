// Return the most frequent element of an array

function returnMajorityElement(arr) {
  const numMap = {}
  for (const num of arr) {
    numMap[num] ? numMap[num]++ : numMap[num] = 1
  }

  let majority = null
  let majorityCount = 0
  for (const prop in numMap) {
    if (numMap[prop] > majorityCount) {
      majorityCount = numMap[prop]
      majority = prop
    }
  }

  return majority
}

console.log(returnMajorityElement([1, 2, 3, 4, 5, 5, 5, 5, 5]), 5)
console.log(returnMajorityElement([3, 2, 3]), 3)
console.log(returnMajorityElement([2,2,1,1,1,2,2]), 2)

// Array of integers. Whole numbers, positive. Length of at least 1. A majority integer will always exist.
// Return the majority integer.

// Declare a numMap.
// Iterate through the array and push to the object.
// Declare majority and majorityCount.
// Iterate through the object and ressign highest count.
// Return majority.