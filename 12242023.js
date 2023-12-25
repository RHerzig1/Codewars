// Write a function that returns the sum of Triangular Numbers up to the nth iteration.

function sumTriangularNumbers(num) {
  let result = [];
  let count = 0;

  for (let i = 0; i < num; i++) {
    count += i + 1;
    result.push(count);
  }

  return result.reduce((a, c) => a + c, 0);
}

console.log(sumTriangularNumbers(4), 20); // 1 + 3 + 6 + 10
console.log(sumTriangularNumbers(34), 7140);
console.log(sumTriangularNumbers(-291), 0);
console.log(sumTriangularNumbers(943), 140205240);
console.log(sumTriangularNumbers(-971), 0);

// A number. Always a positive integer.
// Return the sum of each Triangular Number including nth.
