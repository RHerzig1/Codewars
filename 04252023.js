// Write a function that takes three integers and returns whether they could create a triangle.

function isTriangle(a, b, c) {
  const sides = [a, b, c].sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2];
}

console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(2, 1, 2), true);
console.log(isTriangle(2, 2, 1), true);
console.log(isTriangle(7, 2, 2), false);
console.log(isTriangle(2, 7, 2), false);
console.log(isTriangle(2, 2, 7), false);

// Three parameters, all positive integers.
// Return a Boolean indicating whether the integers could build a triangle.

// Use the Triangle Inequality Theorem, which states that the sum of two sides should be greater than the third side.
// Sort the parameters by size.
// Return whether the largest side is bigger than the sum of the smaller two sides.
