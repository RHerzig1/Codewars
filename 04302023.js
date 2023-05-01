// Write a function that adds integers in an array and returns 'even' or 'odd'.

function oddOrEven(array) {
  return array.reduce((a, c) => a + c, 0) % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([1, 2, 3, 4, 5]), "odd");
console.log(oddOrEven([1, 2, 3, 4]), "even");
console.log(oddOrEven([]), "even");

// An array containing integers. May be empty.
// Return "odd" or "even" based off the sum.

// Reduce the array.
// Use the modulus to determine whether the result is even or odd.