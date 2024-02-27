// Write a function that solves the TwoSum challenge using two pointers.

function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  let sum: number | null = null;

  while (sum !== target) {
    sum = numbers[left] + numbers[right];

    if (sum > target) {
      right--;
    }
    if (sum < target) {
      left++;
    }
  }

  return [left + 1, right + 1];
}

console.log(twoSum([2, 7, 11, 15], 9), [1, 2]);
console.log(twoSum([2, 3, 4], 6), [1, 3]);
console.log(twoSum([-1, 0], -1), [1, 2]);

// numbers: number[]. Sorted in non-decreasing order. 2 <= numbers.length <= 3 * 10^4. -1000 <= numbers[i] <= 1000. Always valid.
// target: number. The target number to reach when adding two elems from numbers. -1000 <= target <= 1000.
// Return an array containing two indices + 1 that add to the target. Only one valid solution exists.

// Declare a left and right pointer at the beginning and end of the array.
// Add elements, if the sum is too small, increase the left pointer. If it's too small, decrease the right pointer.
// Continue until sum === target.
// Return [left + 1, right + 1].
