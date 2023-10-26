// Write a function that returns the sum of elements that appear in the array only once.

function splitInteger(num, split) {
  const arr = [];
  const quotient = Math.floor(num / split);
  const quotientInc = quotient + 1;

  while (arr.length < split) {
    num - arr.reduce((a, c) => a + c, 0) === quotientInc * (split - arr.length)
      ? arr.push(quotientInc)
      : arr.push(quotient);
  }

  return arr;
}

// function splitInteger(num, parts) {
//   const remainder = num % parts;
//   const int = Math.floor(num / parts);

//   return [
//     ...new Array(parts - remainder).fill(int),
//     ...new Array(remainder).fill(int + 1)
//   ];
// }

console.log(splitInteger(20, 6), [3, 3, 3, 3, 4, 4]);
console.log(splitInteger(20, 4), [5, 5, 5, 5]);
console.log(splitInteger(10, 4), [2, 2, 3, 3]);

// Two numbers: the total and the total length of the array. All valid numbers > 0.
// Return an array of numbers that add up to the total. The length of the array must match the provided parameter as well. The numbers should be as close in values as possible (e.g. 5 + 6 instead of 1 + 10).
