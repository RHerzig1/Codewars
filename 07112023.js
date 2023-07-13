// Write a function that finds the missing term in an Arithmetic Progression.

function findMissing(arr) {
  const totalSum = (arr.at(0) + arr.at(-1)) * ((arr.length + 1) / 2);
  const actualSum = arr.reduce((a, c) => a + c);
  return totalSum - actualSum;
}

console.log(findMissing([1, 3, 4]), 2);
console.log(findMissing([4, 3, 1]), 2);
console.log(findMissing([2, 14, 20, 26]), 8);
console.log(findMissing([2, 8, 14, 26]), 20);
console.log(findMissing([2, 9, 16, 30]), 23);
console.log(findMissing([3, 8, 13, 23]), 18);

// An array of integers. Length of at least 3. All integers are positive.
// Return the missing number to complete the pattern. The difference between each consecutive element is constant. The first and last element will never be missing.

// Calculate the total sum (as if the number weren't missing). (first + last) * (length + 1) / 2
// Calculate the actual sum (with the missing number) by iterating through the array.
// Return the difference to find the missing number.
