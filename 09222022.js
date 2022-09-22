// Determine final outcome of Booleans in array

const logicalCalc = (array, op) => {
  return array.reduce((acc, cur) => {
    if (op === 'AND') return acc && cur;
    if (op === 'OR') return acc || cur;
    if (op === 'XOR') return acc != cur;
  });
};

// The parameters are an array (legnth >= 1 and <= 50) of Booleans, and an "AND", "OR", or "XOR" string.
// Return the final outcome of the Booleans using the provided operator.
// [true, true, false], "and" -> false
// Iterate through the array usng the reduce method.
// Write a conditional inside the statement to provide different options for reducing the array using the operators.
// Return the last element of the array.