// Minimum number game.

function numberGame(nums: number[]): number[] {
  const result: number[] = [];
  nums.sort((a, b) => b - a);

  while (nums.length) {
    const num1 = nums.pop();
    const num2 = nums.pop();

    result.push(num2!, num1!);
  }

  return result;
}

console.log(numberGame([5, 4, 2, 3]), [3, 2, 5, 4]);
console.log(numberGame([2, 5]), [5, 2]);
// https://leetcode.com/problems/minimum-number-game/

// nums: number[]. 2 <= nums.length <= 100. 1 <= nums[i] <= 100. Length is always even.
// Return an array of integers from nums.
// Remove 2 minimum elements from nums (num1 and num2).
// Push both elements into a result array (in order of num2 and num1).
