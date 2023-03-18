// Write an algorithm that uses binary search to return the index of the provided integer.

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left + 1) / 2);
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  return nums[left] === target ? left : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3), 2);
console.log(binarySearch([1, 2, 3, 4, 5], 1), 0);
console.log(binarySearch([1, 2, 3, 4, 5], 6), -1);

// An array of integers and a target number.
// Return the index of the target number or -1 if that number is not in the array.

// Declare a left and right side.
// While left is less than right.
// Declare mid.
// Resign right or left based off the location of the target.
// Return the target or -1.

// NOTE FOR LINE 8: mid is calculated by subtracting right - left to avoid overflowing large values.