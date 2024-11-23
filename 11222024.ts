// Subarrays of given length with average value above threshold.

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let sum = 0;
  let left = 0;
  let right = 0;
  let count = 0;

  // Window algorithm.
  while (right < arr.length) {
    // Cache the right pointer value.
    sum += arr[right];

    // Check window length.
    if (right - left + 1 === k) {
      const average = sum / k;

      if (average >= threshold) {
        count++;
      }

      sum -= arr[left];
      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return count;
}

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4), 3);
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5), 6);
// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

// arr: number[]. 1 <= arr.length <= 10^5. 1 <= arr[i] <= 10^4.
// k: number. 1 <= k <= arr.length.
// threshold: number. 0 <= threshold <= 10^4.
