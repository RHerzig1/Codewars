// Write a functon that returns the number of binary subarrays with sum.

function numSubarraysWithSum(nums: number[], goal: number): number {
  let oneCount = 0;
  let subarrayCount = 0;
  let tempCount = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // Cache the right pointer value.
    if (nums[right] === 1) {
      tempCount = 0;
      oneCount++;
    }

    // Check the condition and increment the left pointer.
    while (oneCount >= goal && left <= right) {
      if (oneCount === goal) {
        tempCount++;
      }

      if (nums[left] === 1) {
        oneCount--;
      }

      left++;
    }

    subarrayCount += tempCount;

    // Increment the right pointer.
    right++;
  }

  return subarrayCount;
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2), 4);
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0), 15);
console.log(numSubarraysWithSum([0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 0), 27);

// nums: number[]. 1 <= nums.length <= 3*10^4. nums[i] === 0 || 1.
// goal: number. The sum goal. 0 <= goal <= nums.length.
// Return a count of the number of subarrays where the total sum equals goal.

// Use the sliding window technique.
