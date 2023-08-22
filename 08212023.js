// Write a function that uses the law of cosines to return the triangle type.

function triangleType(a, b, c) {
  [a, b, c] = [a, b, c].sort((a, b) => a - b);

  if (a + b <= c) {
    return 0;
  }
  if (a * a + b * b == c * c) {
    return 2;
  }
  if (a * a + b * b > c * c) {
    return 1;
  }
  if (a * a + b * b < c * c) {
    return 3;
  }
}

console.log(triangleType(2, 4, 6), 0); // Not a triangle
console.log(triangleType(8, 5, 7), 1); // Acute
console.log(triangleType(3, 4, 5), 2); // Right
console.log(triangleType(7, 12, 8), 3); // Obtuse

// Three integers > 0. All valid numbers.
// Return 0, 1, 2, 3 to indicate the type of triangle.
