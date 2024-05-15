// Write a function that counts the negative numbers in a sorted matrix.

function countNegatives(matrix: number[][]): number {
  let count = 0;

  for (const arr of matrix) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let middle = Math.floor((right + left) / 2);

      if (arr[middle] >= 0) {
        left = middle + 1;
      } else if (arr[middle] < 0) {
        right = middle - 1;
      }
    }

    count += arr.length - left;
  }

  return count;
}

console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]), 8);
console.log(countNegatives([[3, 2], [1, 0]]), 0);
// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

// grid: number[][]. 1 <= grid.length, grid[i].length <= 100. -100 <= grid[i][j] <= 100.
// Return the number of negative numbers in the matrix.

// Use binary search on each array.
