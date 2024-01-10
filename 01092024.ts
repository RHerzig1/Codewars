// Write a function that converts an array of arrays into a string of CSVs.

export function toCsvText(arr: number[][]): string {
  const csv: string = arr.map((elem) => elem.join(",")).join("\n");
  return csv;
}

console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ]),
  "0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34"
);
console.log(
  toCsvText([
    [-25, 21, 2, -33, 48],
    [30, 31, -32, 33, -34],
  ]),
  "-25,21,2,-33,48\n30,31,-32,33,-34"
);
console.log(
  toCsvText([
    [5, 55, 5, 5, 55],
    [6, 6, 66, 23, 24],
    [666, 31, 66, 33, 7],
  ]),
  "5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7"
);

// An array of arrays. Each nested array contains numbers. 0 <= array.lengths <= 100;
// Return a string of CSVs. Seperate each inner array with a new line '/n'.

// Join the inner arrays.
// Join the outer arrays.
