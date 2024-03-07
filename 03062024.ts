// Write a function that moves all zeros to the end of an array using the two pointer technique.

function moveZeroes(nums: number[]): void {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
      if (nums[right] === 0) {
          right++
          continue;
      }

      if (nums[left] === 0) {
          nums[left] = nums[right];
          nums[right] = 0;
      }

      left++;
      right++;
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
console.log(moveZeroes([0]), [0]);

// nums: number[]. An array on non-unique numbers. 1 <= nums.length <= 10^4. -2^31 <= nums[i] <= 2^31 - 1.
// Return the array with the zeros moved to the end in-place. Do not make a copy of the array. Maintain the order of non-zero elements.

// Use two pointers.
// Iterate the right pointer until it's a non-zero integer.
// Iterate the left pointer until it's zero.
// Swap the values. The non-zero integer should be assigned to the left pointer. Right can equal 0.
// Increment both pointers.