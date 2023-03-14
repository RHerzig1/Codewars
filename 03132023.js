// Write an algorithm checks whether an integer is a narcissistic number.

function isNarcissistic(num) {
  return Array.from(String(num)).map(Number).reduce((a, c, ci, arr) => a + (c ** arr.length), 0) === num;
}

console.log(isNarcissistic(153), true)
console.log(isNarcissistic(1652 ), false)

// A positive integer always greater than 0.
// Return a Boolean indicating whether or not the parameter is a narcissistic number.
// A narcissistic number is a number where the sum of each digit, after being raise to the power of the number of digits, equals itself.

// Convert the number into an array of digits.
// Raise each digit to the power of the length of the array and calculate the sum.
// Return whether or not the result equals the parameter.