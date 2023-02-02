// Write an algorithm that uses recursion to find the greatest common divisor of two values.

function findGCD(q, r) {
  if (r == 0)
    return q;
  else
    return findGCD(r, (q % r));
}

console.log(findGCD(30, 12), 6)
console.log(findGCD(12, 30), 6)
console.log(findGCD(36, 12), 12)
console.log(findGCD(1, 12), 1)

// Two parameters. Each is a positive, whole number greater or equal to 1.
// Return the greatest common divisor of both parameters.

// Use the Euclidean algorithm.