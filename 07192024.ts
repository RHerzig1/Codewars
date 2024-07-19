// Find the missing number of an array using binary search.

function missingNumber(nums: number[]): number {
  // Sort the paremeter in ascending order.
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length;

  // Use a binary search algorithm.
  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] > middle) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
}

console.log(missingNumber([3, 0, 1]), 2);
console.log(missingNumber([0, 1]), 2);
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);

// nums: number[]. 1 <= nums.length <= 10^4. 0 <= nums[i] <= nums.length. All numbers are unique.
// Return the missing number from the arrray using O(1) space and 0(n) time complexities.
