function pairs(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i += 2) {
    if (Math.abs(arr[i + 1] - arr[i]) === 1) {
      count++;
    }
  }

  return count;
}

// Write a funciton that counts the number of consecutive pairs in an array.

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]), 3);
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]), 2);
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]), 0);
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]), 4);
console.log(pairs([73, 72, 8, 9, 73, 72]), 3);

// An array of numbers. Positive or negative integers. Always valid numbers. 0 <= length <= 100;
// Return a count of the consecutive pairs.

// Iterate through the array and subtract each pair.
// Use Math.abs to account for differences of -1.
