// Write a function that returns whether an integer matrix has a target value using binary search.

function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix.length - 1;
  let middle = Math.floor((left + right) / 2);
  let arr: number[] = [];

  // Binary search to find the correct array.
  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (matrix[middle].at(-1) < target) {
      left = middle + 1;
    } else if (matrix[middle].at(0) > target) {
      right = middle - 1;
    } else {
      arr = matrix[middle];
      break;
    }
  }

  left = 0;
  right = arr.length - 1;
  middle = Math.floor((left + right) / 2);

  // Binary search to find the target within the array.
  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3), true);
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13), false);
// https://leetcode.com/problems/search-a-2d-matrix/

// matrix: number[][]. m * n array of arrays. 1 <= m.length <= 100. 1 <= n.length <= 100. -10^4 <= mattrix[n][m] <= 10^4.
// target: number. -10^4 <= target <= 10^4.
// Return a Boolean indicating whether target is a value within the integer matrix.

// Use binary search to find the array that would contain the target.
// Use binary search to find the target within the array.
// Return true or false.
