// Create a function that takes three non-negative integers. The starting number, the ending number, and the count number.

const sequenceSum = (begin, end, step) => {
  let sum = 0
  for (let i = begin; i <= end; i += step) {
    sum += i
  }
  return sum
};

// Three integers. Starting, ending, and count numbers.
// Return the sum of each count between the starting and ending parameters.
// (3, 9, 2) -> 24 (3 + 5 + 7 + 9)
// Create a sum variable equal to begin.
// Using a for loop, let i equal begin, until i equals end, and increase i each step.
// Add i to the variable.
// Return the variable.