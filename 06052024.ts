// Write a function that creates column titles as they appear in Excel.

function convertToTitle(columnNumber: number): string {
  const letterCodes: number[] = [];

  // Add letter codes (1-26) to the result array.
  while (columnNumber > 26) {
    const letter = columnNumber-- % 26 || 26;
    columnNumber = Math.floor(columnNumber / 26);
    letterCodes.push(letter);
  }

  letterCodes.push(columnNumber);

  // Convert letter codes (1-26) into letters.
  const title: string[] = letterCodes.map((elem) => String.fromCharCode(64 + elem));

  return title.reverse().join("");
}

console.log(convertToTitle(1), "A"); // [1]
console.log(convertToTitle(28), "AB"); // [1, 2]
console.log(convertToTitle(701), "ZY"); // [26, 25]
console.log(convertToTitle(20000), "ACOF"); // [1, 3, 15, 6]
// https://leetcode.com/problems/excel-sheet-column-title/

// columnNumber: number. 1 <= columnNumber <= 2^31 - 1.
// Return a string containing the Excel equivalent of columnNumber.
