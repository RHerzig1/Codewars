// Write a function that uses the Luhn Algorithm to validate a credit card number.

function validate(n) {
  const arr = String(n).split("").map(Number);
  const parity = arr.length % 2;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== parity) {
      sum += arr[i];
    } else if (arr[i] > 4) {
      sum += 2 * arr[i] - 9;
    } else {
      sum += 2 * arr[i];
    }
  }

  return sum % 10 === 0;
}

console.log(validate(123), false)
console.log(validate(1), false)
console.log(validate(2121), true)
console.log(validate(1230), true)

// An integer greater than 0.
// Return true or false indicating the number's validity.

// Use the Luhn Algorithm: https://en.wikipedia.org/wiki/Luhn_algorithm