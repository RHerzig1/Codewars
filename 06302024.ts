// Count the subarrays with an average value below the threshold.

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let subarrayCount = 0;
  let sum = 0;
  let left = 0;
  let right = 0;

  while (right < arr.length) {
    // Cache the right pointer value.
    sum += arr[right];

    // Check the window length.
    if (right - left + 1 === k) {
      // Calculate the average and compare it to threshold.
      const average = sum / k;

      if (average >= threshold) {
        subarrayCount++;
      }

      // Increment the left pointer.
      sum -= arr[left];
      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return subarrayCount;
}

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4), 3);
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5), 6);
// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

// arr: number[]. 1 <= arr.length <= 10^5. 1 <= arr[i] <= 10^4.
// k: number. Target subarray length. 1 <= k <= arr.length.
// threshold: number. Target value average of subarray. 0 <= threshold <= 10^4.
// Return the number of k-lengthed subarrays that have an average value >= than threshold.
