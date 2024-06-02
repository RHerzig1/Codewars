// Write a function that generates Pascal's Triangle.

function getRows(rowNum: number): number[][] {
  const result = [[1]];

  while (rowNum > 1) {
    const tempArr1 = result.at(-1);
    const tempArr2 = [0, ...tempArr1];
    const newRow = addArrays(tempArr1, tempArr2);
    result.push(newRow);
    rowNum--;
  }

  return result;
}

function addArrays(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr2.length; i++) {
    result[i] = (arr1[i] || 0) + (arr2[i] || 0);
  }

  return result;
}

console.log(getRows(1), [[1]]);
console.log(getRows(3), [[1], [1, 1], [1, 2, 1]]);
console.log(getRows(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
// https://leetcode.com/problems/pascals-triangle/

// numRows: number. 1 <= numRows <= 30.
// Return number[][] indicating each row of Pascals triangle. The number of rows should match numRows.

// Declare result equal to [[1]], as the minimum.
// In a while loop, push a new array into result and decrease numRows until it's 0.
// Return the result.
