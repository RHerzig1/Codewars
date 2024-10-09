// Convert a date to binary.

function convertDateToBinary(date: string): string {
  const arr = date.split("-");
  const arrBinary = arr.map((elem) => Number(elem).toString(2));
  const binary = arrBinary.join("-");

  return binary;
}

console.log(convertDateToBinary("2080-02-29"), "100000100000-10-11101");
console.log(convertDateToBinary("1900-01-01"), "11101101100-1-1");
// https://leetcode.com/problems/convert-date-to-binary/

// date: string. date.length === 10. Always in a xxxx-xx-xx format.
// Convert the numbers in the date to binary and return.
