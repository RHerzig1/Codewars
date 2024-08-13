// Combination Sum II


function combinationSum2(candidates: number[], target: number): number[][] {
  const combinations: number[][] = [];
  candidates = candidates.sort((a, b) => a - b);

  const recursion = function (index: number, sum: number, arr: number[]) {
    if (sum > target) {
      return null;
    } else if (sum === target) {
      combinations.push(arr);
      return null;
    }

    for (let i = index; i < candidates.length; i++) {
      if (i !== index && candidates[i] === candidates[i - 1]) {
        continue;
      }

      const newIndex: number = i + 1;
      const newSum: number = sum + candidates[i];
      const newArr: number[] = arr.concat(candidates[i]);

      recursion(newIndex, newSum, newArr);
    }
  };

  recursion(0, 0, []);

  return combinations;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8), [
  [1, 1, 6],
  [1, 2, 5],
  [1, 7],
  [2, 6],
]);
console.log(combinationSum2([2, 5, 2, 1, 2], 5), [[1, 2, 2], [5]]);
// https://leetcode.com/problems/combination-sum-ii/?envType=daily-question

// candidates: number[]. 1 <= candidates.length <= 100. 1 <= candidates[i] <= 50.
// target: number. 1 <= target <= 30.
// Return the combinations of numbers that add to the target.
