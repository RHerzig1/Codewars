// Write a function that calculates the number of trailing zeros in a factorial of a given number.

function countTrailingZeros(num) {
  let result = 0;

  for (let i = 1; i <= num; i++) {
    let j = i;

    while (j % 5 === 0) {
      result++;
      j = Math.floor(j / 5);
    }
  }
  return result;
}

console.log(countTrailingZeros(0), 0);
console.log(countTrailingZeros(5), 1);
console.log(countTrailingZeros(6), 1);
console.log(countTrailingZeros(30), 7);

// An integer equal to 0 or greater. May be a large number.
// Return the number of trailing 0s that existing in the

// A trick to calculating the number of zeros is to count how many times 5 can fit in each factorial.
// Declare a result variable equal to 0.
// Iterate through each number of the factorial.
// Initialize a variable j to i. While j is divisible by 5, increment the counter and divide j by 5.
// Return the result.