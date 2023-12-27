// Write a function that returns the sum of all the arguments.

const sum = (...args) => args.reduce((a, c) => a + c, 0);

console.log(sum(1, 2, 3, 4, 5), 15);
console.log(sum(1, 2, 3, 4, -5), 5);
console.log(sum(0, 1), 1);
console.log(sum(), 0);

// A series of numbers as seperate parameters. Always valid positive or negative integers. 0 <= number of params <= 10.
// Return the sum, or 0 if no number is passed through.