// Write a function that returns the maximum average element from a subarray with a length of k.

function findMaxAverage(nums: number[], k: number): number {
  let left = 0;
  let right = 0;
  let total = 0;
  let maxAverage = -999999999999;

  while (right < nums.length) {
    // If the window width equals k, increment the left pointer.
    if (right - left >= k) {
      total -= nums[left];
      left++;
    }

    // Increment the right pointer.
    total += nums[right];
    right++;

    // If the window width equals k, calculate the max average.
    if (right - left === k) {
      let average = total / k;
      maxAverage = Math.max(maxAverage, average);
    }
  }

  return maxAverage;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4), 12.75);
console.log(findMaxAverage([5], 1), 5.0);

// nums: number[]. 1 <= nums.length <= 10^5. -10^4 <= nums[i] <= 10^4.
// k: number. The number of elements in the subarray. 1 <= k <= nums.length.
// Return the largest average elemenent possible from a subarray with a length of k.

// Use the sliding window technique.
// Expand the window.
// Calculate the change.
// Update max.
