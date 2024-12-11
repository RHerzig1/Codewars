// Find the power numbers from subarrays.

function resultsArray(nums: number[], k: number): number[] {
  const result: number[] = [];
  const subArray: number[] = [];
  let pointer = 0;

  while (pointer < nums.length) {
    // Cache pointer value
    subArray.push(nums[pointer]);

    if (subArray.length === k) {
      // Calculate whether the subarray is consecutive
      const isConsecutive: boolean = isConsecutiveArray(subArray);
      result.push(isConsecutive ? subArray.at(-1)! : -1);

      // Decache
      subArray.shift();
    }

    // Increment pointer
    pointer++;
  }

  return result;
}

function isConsecutiveArray(subArray: number[]): boolean {
  for (let i = 1; i < subArray.length; i++) {
    if (subArray[i] !== subArray[i - 1] + 1) {
      return false;
    }
  }

  return true;
}

console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3), [3, 4, -1, -1, -1]);
// [1, 2, 3] === Power, because all values are consecutive and in ascending order. Push the highest value, 3, into the result.
// [2, 3, 4] === Power. Push 4 into the result.
// [3, 4, 3] === No power. Push -1 into the result.
// [4, 3, 2] === No power. Push -1 into the result.
// [3, 2, 5] === No power. Push -1 into the result.
// [3, 4, -1, -1, -1]
console.log(resultsArray([2, 2, 2, 2, 2], 4), [-1, -1]);
console.log(resultsArray([3, 2, 3, 2, 3, 2], 2), [-1, 3, -1, 3, -1]);
// https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i

// nums: number[]. 1 <= nums.length <= 500. 1 <= nums[i] <= 10^5.
// k: number. 1 <= k <= nums.length.
// Return an array (length = n - k + 1), where each element is the power of nums[i..(i + k - 1)].
