// Write a function that squares and concatenates each digit of a number.

function squareDigits(num) {
  return +String(num)
    .split("")
    .map((elem) => Number(elem * elem))
    .join("");
}

console.log(squareDigits(123), 149);
console.log(squareDigits(567), 253649);
console.log(squareDigits(0), 0);

// A positive integer 0 or greater.
// Return a positive integer where each digit has been squared.

// Split the parameter into an array.
// Square each digit.
// Join and convert back to number.
// Return the result.