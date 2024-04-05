// Write a function that returns a count of subarrays of size k and average greater than the threshold.

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let average = 0;
  let count = 0;
  let left = 0;
  let right = 0;

  while (right < arr.length) {
    // Cache the right pointer value.
    average = average + (arr[right] - average) / (right - left + 1);

    // If the window size equals k, check the condition and increment the left pointer.
    if (right - left + 1 >= k) {
      if (average >= threshold) {
        count++;
      }

      average = (average * (right - left + 1) - arr[left]) / (right - left + 1 - 1) || 0;
      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return count;
}

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4), 3);
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5), 6);
console.log(numOfSubarrays([1, 1, 1, 1, 1], 1, 0), 5);

// numOfSubarrays: number[]. 1 <= arr.length <= 10^5. 1 <= arr[i] <= 10^4.
// k: number. The size of the subarray. 1 <= k <= numOfSubarrays.length.
// threshold: number. The minimum average for the subarray to count. 1 <= threshold <= 10^4.
// Return the count of subarrays that have a length of k and an average greater than or equal to the threshold.

// Use the sliding window technique.
