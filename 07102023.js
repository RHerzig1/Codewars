// Write a function that calculates the sum of all cubed values between 0 and n.

function addCubed(num) {
  let total = 0;

  for (let i = 1; i <= num; i++) {
    total += i ** 3;
  }

  return total;
}

console.log(addCubed(5), 225);
console.log(addCubed(10), 3025);
console.log(addCubed(15), 3025);

// A positive integer. Always a valid number.
// Return the sum of each value, cubed, from 1 to n (inclusive).

// Declare a total variable equal to 0.
// Iterate from 1 to num. For each increment, add the cubed value into total.
// Return total.