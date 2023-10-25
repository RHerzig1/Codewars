// Write a function that returns the sum of elements that appear in the array only once.

function sumOfSingleElems(arr) {
  const uniqueElems = [];

  arr.forEach((elem, index) => {
    if (arr.indexOf(elem) === arr.lastIndexOf(elem)) {
      uniqueElems.push(elem);
    }
  });

  return uniqueElems.reduce((a, c) => a + c, 0);
}

console.log(sumOfSingleElems([1, 1, 2, 2, 3, 3, 4, 5]), 9);
console.log(sumOfSingleElems([1, 2, 3, 4, 5, 3, 2, 1]), 9);
console.log(sumOfSingleElems([1, 1, 3, 4]), 7);

// Array of numbers. Array length > 0. All numbers appear twice except for two, which appear once.
// Return the sum of those numbers as a number.

// Create a new array of only the numbers that appear once.
// Return the sum of those two numbers.
