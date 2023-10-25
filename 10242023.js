// Write a function that returns average, rounded down, of an array of numbers.

function average(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return Math.floor(sum / arr.length);
}

console.log(average([2, 2, 2, 2, 2]), 2);
console.log(average([1, 2, 3, 4, 5]), 3);
console.log(average([2, 2, 2, 2, 2, 10, 10]), 4);


// An array containing numbers. Always a valid array and always valid, positive numbers. The array will never be empty.
// Return the average of each number in the array, rounded down.

// Reduce the array to find the sum.
// Divide it by it's length.
// Round down.
// Return the average.