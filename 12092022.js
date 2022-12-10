// Remove duplicate elements from array

const { arrayBuffer } = require("stream/consumers");

const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
      nums.splice(nums.lastIndexOf(nums[i]), 1)
      i--
    }
  }
  return nums
};

console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 5]), [1, 2, 3, 4, 5])
console.log(removeDuplicates([1]), [1])
console.log(removeDuplicates([1, 2, 2, 2, 3, 4, 2, 2, 2, 5, 5, 5]), [1, 2, 3, 4, 5])

// An array of numbers. All whole numbers. Positive. Length of at least 1.
// Return the array with all duplicate elements removed. Do not create any additional arrays.

// Loops through the array.
// If the indexOf the element does not equal lastIndexOf, remove that element.
// Return the array.