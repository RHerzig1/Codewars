// 3Sum closest to target.

function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let result = 0;
  let difference: number = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let left = i;
    let middle = left + 1;
    let right = nums.length - 1;

    // Two pointer approach to find the most optimal 3rd number
    while (middle < right) {
      const sum = nums[left] + nums[middle] + nums[right];

      if (sum < target) {
        middle++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }

      const currentDifference = Math.abs(target - sum);

      if (currentDifference < difference) {
        difference = currentDifference;
        result = sum;
      }
    }
  }

  return result;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1), 2);
console.log(threeSumClosest([0, 0, 0], 1), 0);

// nums: number[]. 3 <= nums.length <= 500. -1000 <= nums[i] <= 1000.
// target: number. -10^4 <= target <= 10^4.
// Return the sum of three nums that are closest to target. Each input has exactly one solution.

// https://leetcode.com/problems/3sum-closest