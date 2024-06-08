// Write a function that converts Excel columns into their corresponding column number.

function titleToNumber(columnTitle: string): number {
  let result = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const letter = columnTitle[i];
    const letterNum = letter.charCodeAt(0) - 64;
    result += letterNum * 26 ** (columnTitle.length - i - 1);
  }

  return result;
}

console.log(titleToNumber("A"), 1);
console.log(titleToNumber("AB"), 28);
console.log(titleToNumber("ZY"), 701);
console.log(titleToNumber("ABC"), 731);
console.log(titleToNumber("FXSHRXW"), 2147483647);
// https://leetcode.com/problems/excel-sheet-column-number/

// ColumnTitle: string. "A" <= columnTitle.length <= "FXSHRXW". Uppercase English letters.
// Return a number indicating the column number.

// Convert each letter to a charCode.
// Add them.
// Return the sum.