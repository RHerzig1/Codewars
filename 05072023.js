// Write a function that performs arithmetic using two numbers and an operator string.

function arithmetic(a, b, operator) {
  const arithmetic = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };

  return arithmetic[operator];
}

console.log(arithmetic(10, 5, "add"), 15);
console.log(arithmetic(10, 5, "subtract"), 5);
console.log(arithmetic(10, 5, "multiply"), 50);
console.log(arithmetic(10, 5, "divide"), 2);

// Two integers and one of the following strings: 'add', 'subtract', 'multiply', 'divide'.
// Return the calcualation of those two numbers using the provided operator string.

// Create an object containing the operators as properties and the arithmetic as values.
// Return the cooresponding value using bracket notation.
