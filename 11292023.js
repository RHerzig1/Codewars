// Write a function that cubes and adds the odd numbers from an array.

function cubeOdd(arr) {
  if (arr.some((elem) => typeof elem === "string")) {
    return undefined;
  }

  const filteredArr = arr.filter((elem) => Math.abs(elem) % 2 === 1).map((elem) => Math.pow(elem, 3));
  return filteredArr.reduce((a, c) => a + c, 0);
}

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(["a", "b", "c"]), undefined);
console.log(cubeOdd([]), undefined);

// An array containing numbers or strings. Integers will always be the number datatype. They may be positive or negative.
// Return the sum of all odd numbers after they've been cubed. If no odd numbers exist, return undefined.

// Filter and cube odd numbers.
// If array is empty, return undefined.
// Else, return the sum.
