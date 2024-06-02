// Write a function that returns the last row of Pascal's Triangle.

function getRow(rowIndex: number): number[] {
  let result: number[] = [1];

  while (rowIndex > 0) {
    const tempArr1 = result;
    const tempArr2 = [0, ...tempArr1];
    result = addArrays(tempArr1, tempArr2);
    rowIndex--;
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

console.log(getRow(1), [1, 1]);
console.log(getRow(3), [1, 3, 3, 1]);
console.log(getRow(5), [1, 5, 10, 10, 5, 1]);
// https://leetcode.com/problems/pascals-triangle-ii/

// numRows: number. 1 <= numRows <= 30.
// Return number[]. The last row of Pascals triangle.

// Declare result equal to [[1]], as the minimum.
// In a while loop, replace result with the next row and decrease numRows until it's 0.
// Return the result.
