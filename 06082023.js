// Write a function that calcualates the triangular number of a provided integer.

function calculateTriangularNumber( n ) {
  return (n > 0) ? ((n * n) + n) / 2 : 0;
}

console.log(calculateTriangularNumber(-1), 0)
console.log(calculateTriangularNumber(0), 0)
console.log(calculateTriangularNumber(1), 1)
console.log(calculateTriangularNumber(2), 3)
console.log(calculateTriangularNumber(5), 15)
console.log(calculateTriangularNumber(10), 55)
console.log(calculateTriangularNumber(1000), 500500)
console.log(calculateTriangularNumber(10000000), 50000005000000)

// A positive or negative integer.
// Return the triangular number of the parameter, or 0 if the number is negative.

// https://en.wikipedia.org/wiki/Triangular_number