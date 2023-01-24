// Write a closure that adds two numbers

function addNumbers(num1) {
  function IncreaseCounter(num2) {
      return num1 + num2
  };
  return IncreaseCounter;
}

const add5 = addNumbers(5)
add5(2) // 7
const add10 = addNumbers(10)
add10(2) // 12

// A function that returns a function.
// The inner function returns the sum of two numbers.
// Assign the function to a variable.
// Use that variable to call the inner function in its own closure.