// Write an algorithm that removes elems from an array in place.

function removeElement(nums, val) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[count++] = nums[i];
    }
  }
  return count;
}

console.log(removeElement([3,2,2,3], 3), 2) // [2, 2]
console.log(removeElement([0,1,2,2,3,0,4,2], 2), 5) // [0,1,4,0,3]

// An array of positive integers and an integer present in the array.
// Modify the array input to remove the val elems, or move them to the end past the count. Return the count of valid elems in the array.

// Declare a count elem equal to 0.
// Loop through the array.
// If the elem does not equal val, reassign the value to the count index.
// Increase count.
// Return the count.