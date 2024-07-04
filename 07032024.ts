// Find the max sum possible of two subarrrays that don't overlap.

function maxSumTwoNoOverlap(nums: number[], a: number, b: number): number {
  let maxSum = 0;
  let sumA = 0;
  let leftA = 0;
  let rightA = 0;

  while (rightA < nums.length) {
    // Add the rightA pointer value.
    sumA += nums[rightA];

    if (rightA - leftA + 1 >= a) {
      // Iterate the elements on the left for subarray B.
      let sumB = 0;
      let leftB = 0;
      let rightB = 0;

      while (rightB < leftA) {
        sumB += nums[rightB];

        if (rightB - leftB + 1 >= b) {
          maxSum = Math.max(maxSum, sumA + sumB);
          sumB -= nums[leftB];
          leftB++;
        }

        rightB++;
      }

      // Iterate the elements on the right for subarray B.
      sumB = 0;
      leftB = rightA + 1;
      rightB = rightA + 1;

      while (rightB < nums.length) {
        sumB += nums[rightB];

        if (rightB - leftB + 1 >= b) {
          maxSum = Math.max(maxSum, sumA + sumB);
          sumB -= nums[leftB];
          leftB++;
        }

        rightB++;
      }

      // Subtract the leftA pointer value.
      sumA -= nums[leftA];

      // Increment the leftA pointer.
      leftA++;
    }

    // Increment the rightA pointer.
    rightA++;
  }

  return maxSum;
}

console.log(maxSumTwoNoOverlap([0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2), 20);
console.log(maxSumTwoNoOverlap([3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2), 29);
console.log(maxSumTwoNoOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3), 31);
// https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/

// nums: number[]. a + b <= nums.length <= 1000. 0 <= nums[i] <= 1000.
// a: number. 1 <= a <= b.
// b: number. a <= b <= 999.
// Return the max sum of two subarrays with lengths equal to a and b. The subarrays may not overlap.

// Use the sliding window technique.
