// Find indices of stable mountains.

function stableMountains(height: number[], threshold: number): number[] {
  const result: number[] = [];

  for (let i = 1; i < height.length; i++) {
    const prevMountain = height[i - 1];

    if (prevMountain > threshold) {
      result.push(i);
    }
  }

  return result;
}

console.log(stableMountains([1, 2, 3, 4, 5], 2), [3, 4]);
console.log(stableMountains([10, 1, 10, 1, 10], 3), [1, 3]);
console.log(stableMountains([10, 1, 10, 1, 10], 10), []);
// https://leetcode.com/problems/find-indices-of-stable-mountains/

// height: number[]. 2 <= height.length <= 100. 1 <= height[i] <= 100.
// threshold: number. 1 <= threshold <= 100.
// Return an array containing the indices of all stable mountains in any order.
// A stable mountain is one where mountain[i - 1] has a height greater than threshold.
