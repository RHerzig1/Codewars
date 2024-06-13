// Solve the 3Sum challenge.

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const target = 0;
  let fixed = 0;

  while (nums[fixed] <= 0 && fixed < nums.length - 2) {
    // Skip duplicate fixed values to avoid duplicate triplets
    if (nums[fixed] === nums[fixed - 1]) {
      fixed++;
      continue;
    }

    let left = fixed + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[fixed] + nums[left] + nums[right];

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        result.push([nums[fixed], nums[left], nums[right]]);

        // Skip duplicate left values
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        // Skip duplicate right values
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      }
    }

    fixed++;
  }

  return result;
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
// console.log(threeSum([0, 1, 1]), []);
// console.log(threeSum([0, 0, 0]), [[0, 0, 0]]);
// https://leetcode.com/problems/3sum/

// nums: number[]. 3 <= nums.length <= 3000. -10^5 <= nums[i] <= 10^5.
// Return all combinations of 3 unique elements that add up to 0.
