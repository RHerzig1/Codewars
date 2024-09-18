// Return the smallest possible sum.

function minimumSum(num: number): number {
  const nums = Array.from(String(num)).sort();
  const new1 = Number(nums[0] + nums[2]);
  const new2 = Number(nums[1] + nums[3]);
  const minSum = new1 + new2;

  return minSum;
}

console.log(minimumSum(2932), 52);
// 2 + 932 = 934
// 92 + 23 = 115
// 29 + 32 = 52
// 293 + 2 = 295
console.log(minimumSum(4009), 13);
// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

// num: number. 1000 <= num <= 9999.
// Return the minimum sum when adding the digits of num.
// All digits must be used, and only two numbers can be added. They can be arranged in any order.
