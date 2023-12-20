// Write a function that uses currying to multiply each element of an array.

function multiplyAll(arr) {
  function multiply(num) {
    return arr.map((elem) => elem * num);
  }

  return multiply;
}

console.log(multiplyAll([1, 2, 3])(2), [2, 4, 6]);
console.log(multiplyAll([1, 2, 3])(1), [1, 2, 3]);
console.log(multiplyAll([1, 2, 3])(0), [0, 0, 0]);
console.log(multiplyAll([])(10), []);

// An array of integers. 0 <= arr.length <= 2000;
// An integer used to multiple each element. 0 <= num <= 100.
// Return the result of multiplying each element of the array by the number. Use currying and make sure to not modify the original array.

// Declare a function to take the array.
// Declare a function to take the num and return the transformed array.