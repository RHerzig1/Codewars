// Write a function that returns the number of nice subarrays.

function numberOfSubarrays(nums: number[], k: number): number {
  let niceCount = 0;
  let oddCount = 0;
  let tempCount = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // Cache the right pointer value.
    if (nums[right] % 2 === 1) {
      oddCount++;
      tempCount = 0;
    }

    // Increment the left pointer value.
    while (oddCount === k) {
      tempCount++;

      if (nums[left] % 2 === 1) {
        oddCount--;
      }

      left++;
    }

    // Update the nice subarray count.
    niceCount += tempCount;

    // Increment the right pointer.
    right++;
  }

  return niceCount;
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3), 2);
console.log(numberOfSubarrays([2, 4, 6], 1), 0);
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2), 16);

// nums: number[]. 1 <= nums.length <= 50000. 1 <= nums[i] <= 10^5.
// k: number. 1 <= k <= nums.length.
// Return a count of the number of nice subarrays within the array. A nice subarray is one in which there are k odd numbers.

// Use a sliding window algorithm.
