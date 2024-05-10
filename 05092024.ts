// Write a function that sorts the headers of a CSV file.

function sortCsvColumns(file: string): string {
  // Split CSV so each row is an array, and each element is a cell.
  let fileArr = file.split("\n").map((row) => row.split(";"));

  // Capitalize and sort a copy of the header.
  const headerSorted = fileArr[0].map((cell) => cell.toUpperCase()).sort();

  // Map the new indexes.
  const indexArr: number[] = [];

  for (let i = 0; i < headerSorted.length; i++) {
    indexArr.push(headerSorted.indexOf(fileArr[0][i].toUpperCase()));
  }

  // Iterate fileArr and assign the new indexes.
  for (let i = 0; i < fileArr.length; i++) {
    const sortedRow: string[] = [];

    indexArr.forEach((elem, index) => (sortedRow[elem] = fileArr[i][index]));

    fileArr[i] = sortedRow;
  }

  // Join the sorted fileArr back into CSV format
  return fileArr.map((row) => row.join(";")).join("\n");
}

// https://www.codewars.com/kata/57f7f71a7b992e699400013f

// file: string. The contents of a CSV file. Each cell is delimited by a semicolon (;). New lines are represented by \n.
// Return the contents of the CSV file after sorting the header. Ignore casing.
