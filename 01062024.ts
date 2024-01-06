// Write a function that returns the number of positive divisors of a number.

export function divisors(num: number) {
  let count: number = 0;

  for (let i = 1; i <= num; i++) {
    if ((num / i) % 1 === 0) {
      count++;
    }
  }

  return count;
}

console.log(divisors(1), 1);
console.log(divisors(10), 4);
console.log(divisors(11), 2);
console.log(divisors(54), 8);
console.log(divisors(64), 7);
console.log(divisors(500000), );

// A positive integer. Always a valid number. 0 <= number <= 500000.
// Return the number of divisors within that number.
