// Sliding window algorithm with monotonic queue.

function maxSlidingWindow(nums: number[], k: number): number[] {
  const decreasingQueue: number[] = [];
  const maxNums: number[] = [];
  let left = 0;
  let right = 0;

  // Sliding window algorithm with monotonic queue
  while (right < nums.length) {
    // Cache right pointer value
    while (decreasingQueue.at(-1) < nums[right] && decreasingQueue.length) {
      decreasingQueue.pop();
    }

    decreasingQueue.push(nums[right]);

    // Verify window is to size. If so, push first element of queue to maxNums
    if (right - left + 1 === k) {
      maxNums.push(decreasingQueue[0]);

      if (decreasingQueue[0] === nums[left]) {
        decreasingQueue.shift();
      }

      left++;
    }

    // Increment right pointer
    right++;
  }

  return maxNums;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]);
console.log(maxSlidingWindow([1], 1), [1]);
// https://leetcode.com/problems/sliding-window-maximum

// nums: number[]. 1 <= nums.length <= 10^5. -10^4 <= nums[i] <= 10^4.
// k: number. 1 <= k <= nums.length. Target length.
// Return the max element from each increment of a sliding window with a length of k.
