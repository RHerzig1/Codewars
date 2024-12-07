// Caculate x-sum of all k-long subarrays.

function findXSum(nums: number[], k: number, x: number): number[] {
  const numsCount = new Map<number, number>();
  const sums: number[] = [];
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // Cache the right pointer value
    numsCount.set(nums[right], (numsCount.get(nums[right]) || 0) + 1);

    // If window length equals k, calculate the sum
    if (right - left + 1 === k) {
      const numsCountArr = Array.from(numsCount);
      numsCountArr.sort((a, b) => b[0] - a[0]).sort((a, b) => b[1] - a[1]);
      let sum = 0;

      for (let i = 0; i < x; i++) {
        if (!numsCountArr[i]) {
          break;
        }

        sum += numsCountArr[i][0] * numsCountArr[i][1];
      }

      sums.push(sum);

      // Decache and increment left pointer
      numsCount.set(nums[left], (numsCount.get(nums[left]) || 1) - 1);
      left++;
    }

    // Increment the right pointer
    right++;
  }

  return sums;
}

console.log(findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2), [6, 10, 12]);
console.log(findXSum([3, 8, 7, 8, 7, 5], 2, 2), [11, 15, 15, 15, 12]);
console.log(findXSum([1, 2, 3, 3, 1, 3, 2, 1, 2], 9, 1), [9]);
// https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i

// nums: number[]. 1 <= nums.length <= 50. 1 <= nums[i] <= 50.
// k: number. 1 <= k <= nums.length. Window length.
// x: number. 1 <= x <= nums.length. Count of highest occuring elements.
// Return the an array of subarray sums.
//   The window length is k.
//   Calculate only the x most occuring values within each subarray. If more that x values have the same number of occurances, use the bigger value.
