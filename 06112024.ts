// Solve Two Sum in O(1) space with a sorted array.

function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}


console.log(twoSum([2, 7, 11, 15], 9), [1, 2]);
console.log(twoSum([2, 3, 4], 6), [1, 3]);
console.log(twoSum([-1, 0], -1), [1, 2]);
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// numbers: number[]. 2 <= numbers.length <= 3*10^4. -1000 <= numbers[i] <= 1000. Sorted in non-decreasing order.
// target: number. -1000 <= target <= 1000.
// Return the indices (+1) of the elements that add to the target. There's only one solution per array. Use O(1) space.

// Use a two pointer algorith.
