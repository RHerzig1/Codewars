// Write a function that returns the length of the longest consecutive elements sequence.

function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  nums = nums.sort((a, b) => a - b);
  let [maxScore, score] = [1, 1];

  for (let i = 1; i < nums.length; i++) {
    const [current, previous] = [nums[i], nums[i - 1]];

    if (current === previous) {
      continue;
    } else if (previous !== current - 1) {
      maxScore = Math.max(maxScore, score);
      score = 0;
    }

    score++;
  }

  return Math.max(maxScore, score);
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]), 4); // [1, 2, 3, 4].length === 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9); // [0, 1, 2, 3, 4, 5, 6, 7, 8].length === 9
console.log(longestConsecutive([1, 2, 0, 1]), 3); // [0, 1, 1, 2].length === 3

// nums: number[]. 0 <= nums.length <= 10^5. -10^9 <= nums.length <= 10^9. May be unsorted. Always valid.
// Return the length of the longest consecutive elements sequence. Write an algorithm that runs in 0(n) time.

// Sort the array.
// Delcare maxScore and score variables.
// Iterate through the array.
// If the values are consecutive, increment score.
// Else, maxScore = Math.max(maxScore, score) and score = 0.
// Return maxScore.
