// Write a function that calculates the sum of n number of elements and returns the closest to m without going over.

function chooseBestSum(max, length, arr) {
  let result = null;

  const calculate = (currSum, i, arr) => {
    if (i) {
      arr.forEach((elem, index) => calculate(currSum + elem, i - 1, arr.slice(index + 1)));
    } else if (currSum <= max) {
      result = Math.max(currSum, result);
    }
  };

  calculate(result, length, arr);
  return result;
}

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]), 163);
console.log(chooseBestSum(163, 3, [50]), null);
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]), 228);

// An integer greater or equal to 0.
// An integer greater or equal to 1.
// An array of integers. Always positive. Length 1 or more.
// Return the integers who's sum is closest to maxDistance without going over. Match the number of integers with length.

// Create pointers using count.
// Iterate through arr using pointers.
// Cache and values less than or equal to maxDistance.
// Return the max value or null.
