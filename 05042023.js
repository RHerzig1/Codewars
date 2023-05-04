// Write a function that returns a count of the divisors of a number.

function countDivisors(num) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (num / i === i) {
        count += 1;
      } else {
        count += 2;
      }
    }
  }

  return count;
}

console.log(countDivisors(0), 0);
console.log(countDivisors(1), 1);
console.log(countDivisors(2), 2);
console.log(countDivisors(10), 4);
console.log(countDivisors(11), 2);
console.log(countDivisors(500000), 42);

// A positive integer.
// Return a count of of the divisors
