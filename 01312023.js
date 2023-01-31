// Write an algorithm that returns the indices of the twosum challenge solution.

function twosum(arr, target) {
  const numMap = {}

  for (let i = 0; i < arr.length; i++) {
    const difference = target - arr[i]
    if (Object.hasOwn(numMap, difference)) return [numMap[difference], i]
    else numMap[arr[i]] = i
  }
}

console.log(twosum([1, 2, 3, 4, 5, 6], 11), [4, 5])
console.log(twosum([1, 2], 3), [0, 1])

// An array of integers. Whole numbers, positive. A target integer. Whole number, positive.
// Return an array containing the indicies of the two elements that add to the target. Only 1 valid pair exists.

// Declare a numMap.
// Iterate through the array.
// Calculate the difference between target and arr[i].
// If numMap has that difference, then return the property value and i.
// Else, add arr[i] to the object with a value of i.