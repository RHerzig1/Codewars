// Write a function that returns the product of every element except itself.

// function productExceptSelf(nums: number[]): number[] {
//   const prefix: number[] = [];
//   const postfix: number[] = [];
//   const result: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     prefix[i] = (prefix[i - 1] ?? 1) * nums[i];
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     postfix[i] = (postfix[i + 1] ?? 1) * nums[i];
//   }

//   for (let i = 0; i < nums.length; i++) {
//     result[i] = (prefix[i - 1] ?? 1) * (postfix[i + 1] ?? 1);
//   }

//   return result;
// }

function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];
  let prefix: number = 1;
  let postfix: number = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    postfix *= nums[i + 1] ?? 1;
    result[i] *= postfix;
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
console.log(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);

// nums: number[]. 2 <= nums.length <= 10^5.  -30 <= nums[i] <= 30. Always valid.
// Solve in O(n) time without using the division operator.

// Declare prefix, postfix, and result arrays.
// Populate prefix by calculating products left to right.
// Populate postfix by calculating products right to left.
// Populate result by calculating product of prefix[i - 1] and postfix[i + 1].

// https://www.youtube.com/watch?v=bNvIQI2wAjk