// Write a function that completes the ThreeSum challenge using 3 pointers.

function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let a = 0; a < nums.length && nums[a] <= 0; a++) {
    if (nums[a] === nums[a - 1]) {
      continue;
    }

    let b = a + 1;
    let c = nums.length - 1;
    const target = Math.abs(nums[a]);

    while (b < c) {
      const sum = nums[b] + nums[c];

      if (sum < target) {
        b++;
      } else if (sum > target) {
        c--;
      } else {
        result.push([nums[a], nums[b], nums[c]]);

        do {
          b++;
        } while (b < c && nums[b] === nums[b - 1]);
        do {
          c--;
        } while (b < c && nums[c] === nums[c + 1]);
      }
    }
  }

  return result;
}

// console.log(threeSum([-4, -1, -1, 0, 1, 2]), [[[-1, -1, 2], [-1, 0, 1] ]]);
// console.log(threeSum([0, 1, 1]), [])
// console.log(threeSum([0, 0, 0]), [[0, 0, 0]])

// nums: number[]. 3 <= nums.length <= 3000. -10^5 <= nums[i] <= 10^5. Unsorted. Always valid.
// Return number[][] of all triplets such that the values add to zero. If a valid solution does not exist, return an empty array.

// Declare 3 pointers.
