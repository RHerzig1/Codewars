// Count how many numbers are smaller than the current element.

function smallerNumbersThanCurrent(nums: number[]): number[] {
  // Use a sorted array as a reference.
  const numsSorted = [...nums].sort((a, b) => a - b);

  nums = nums.map((elem) => {
    return numsSorted.indexOf(elem);
  });

  return nums;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [4, 0, 1, 1, 3]);
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]);
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [7, 7, 7, 7]);
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

// nums: number[]. 2 <= nums.length <= 500. 0 <= nums[i] <= 100.
// Return an array where each element is a count of other elements smaller than it.
