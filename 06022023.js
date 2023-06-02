// Write a function that returns the maximum integer multiple within a given bound.

function maxMultiple(multiple, bound) {
  const num = Math.floor(bound / multiple);
  return multiple * num;
}

console.log(maxMultiple(1, 10), 10);
console.log(maxMultiple(3, 10), 9);
console.log(maxMultiple(6, 10), 6);

// Two integers, a multiple and a maximum bound.
// Return the largest multiple possible within the bound.

// Divide the bound by the multiple, and round down to the lowest whole number.
// Multiple the number by the multiple.
