// Count the number of subarrays containing k odd numbers.

function numberOfSubarrays(nums: number[], k: number): number {
  let oddCount = 0;
  let niceCount = 0;
  let tempCount = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // Cache the right pointer value.
    if (nums[right] % 2 === 1) {
      oddCount++;
      tempCount = 0;
    }

    // Check the target condition.
    while (oddCount === k) {
      tempCount++;

      // Uncache the left pointer value.
      if (nums[left] % 2 === 1) {
        oddCount--;
      }

      left++;
    }

    // Increment niceCount.
    niceCount += tempCount;

    // Increment the right pointer value.
    right++;
  }

  return niceCount;
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3), 2);
console.log(numberOfSubarrays([2, 4, 6], 1), 0);
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2), 16);

// nums: number[]. 1 <= nums.length <= 50000. 1 <= nums[i] <= 10^5.
// k: number: 1 <= k <= nums.length.
// Return the number of subarrays that have k odd numbers in it.

// Use a sliding-window algorithm.
