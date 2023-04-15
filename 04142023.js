// Write a function that searches for a triple consecutive and double consecutive number from parameters.

function tripledouble(num1, num2) {
  const nums = [...Array(10).keys()];

  return +nums.some(
    (num) =>
      num1.toString().includes(num.toString().repeat(3)) &&
      num2.toString().includes(num.toString().repeat(2))
  );
}

console.log(tripledouble(451999277, 41177722899), 1);
console.log(tripledouble(1222345, 12345), 0);
console.log(tripledouble(111222, 11222), 1);

// Two integers greater than 1.
// Return 1 if the first parameter has a triple consecutive number and the second parameter has a double parameter of that same number.

// Create an array containing numbers 1 - 9.
// Iterate through both parameters to search for the string.
// Use a unary operator to convert the result to 0 or 1.
