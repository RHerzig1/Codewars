// Sum of squares of special elements.

function sumOfSquares(nums: number[]): number {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const index = i + 1;

    if (nums.length % index === 0) {
      console.log(i);
      sum += nums[i] ** 2;
    }
  }

  return sum;
}

console.log(sumOfSquares([1, 2, 3, 4]), 21);
// 4 % 1 === 0 is true.
// 4 % 2 === 0 is true.
// 4 % 3 === 0 is false.
// 4 % 4 === 0 is true.
// 1 + 4 + 16 = 21.
console.log(sumOfSquares([2, 7, 1, 19, 18, 3]), 63);
// https://leetcode.com/problems/sum-of-squares-of-special-elements/

// nums: number[]. 1 <= nums.length <= 50. 1 <= nums[i] <= 50;
// Return the sum of squares of all special elements in the array.
//   A special element is one in which nums.length % i === 0.
//   For this problem, arrays are 1-indexed.
