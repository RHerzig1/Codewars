// Rewrite the Math.round, Math.ceil, and Math.floor methods.

Math.round = (num) => num - parseInt(num) >= 0.5 ? parseInt(num + 1) : parseInt(num);
Math.ceil = (num) => (parseInt(num) === num ? num : parseInt(num + 1));
Math.floor = (num) => parseInt(num);

console.log(Math.round(1.1), 1);
console.log(Math.floor(0.1), 0);
console.log(Math.ceil(4.1), 5);
console.log(Math.round(1), 1);
console.log(Math.floor(1), 1);
console.log(Math.ceil(1), 1);

// A positive number >= 0. May have decimal values.
// Return the rounded value after applying Math.floor, ceil, or round.
