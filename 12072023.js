// Write a function that returns the average of contigious elements.

function averages(arr) {
  const result = [];

  if (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      result.push((arr[i] + arr[i + 1]) / 2);
    }
  }

  return result;
}

console.log(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2]);
console.log(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]);
console.log(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]);

// An array of integers. Length >= 0. Always valid positive or negative numbers.
// Return an array containing the average of each contigious pair of elements. If the length is < 2, return an empty array.

// Declare a results array equal to an empty array.
// Iterate through the parameter using a for loop. Calculate the average and push it to the result.
// Return the result.
