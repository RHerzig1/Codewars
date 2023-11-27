// Write a function that returns the sum of only the even numbers of an array.

function sumEvenNumbers(arr) {
  let sum = 0;

  for (const elem of arr) {
    if (elem % 2 === 0) {
      sum += elem;
    }
  }

  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30);
console.log(sumEvenNumbers([]), 0);
console.log(sumEvenNumbers([1, 3, 5, 7, 9]), 0);

// An array of positive integers. Always valid numbers. Length >= 0.
// Return the sum of only the even numbers inside the array.

// Iterate through the array.
// If the elem is even, add it to a cache.
// Return the cache.
