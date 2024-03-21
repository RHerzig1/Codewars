// Write a function that uses Floyd–Warshall's algorithm to find the cycle in a linked list.

function findDuplicate(nums: number[]): number {
  let left = 0;
  let right = 0;

  do {
    left = nums[left];
    right = nums[nums[right]];
  } while (left !== right);

  right = 0;

  while (left !== right) {
    left = nums[left];
    right = nums[right];
  }

  return left;
}

console.log(findDuplicate([1, 3, 4, 2, 2]), 2);
console.log(findDuplicate([3, 1, 3, 4, 2]), 3);
console.log(findDuplicate([3, 3, 3, 3, 3]), 3);

// nums: number[]. nums.length === n + 1. 1 <= n <= 10^5. 1 <= nums[i] <= n. One integer will appear more than once.
// Return the integer that appears more than once. Use constant space and don't modify the array.

// https://www.youtube.com/watch?v=wjYnzkAhcNk
// Use Floyd–Warshall's algorithm.
// Declare a slow and fast pointer at the head.
// Iterate both until they meet.
// Declare a new pointer at the head.
// Iterate both the slow and new pointer until the meet.
// Return that node.
