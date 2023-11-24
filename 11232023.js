// Write a function that reverses positive and negative numbers.

function reverseNumber(num) {
  const reverse = parseInt(String(num).split('').reverse().join(''));
  return reverse * Math.sign(num);
}

console.log(reverseNumber(123), 321);
console.log(reverseNumber(-123), -321);
console.log(reverseNumber(1), 1);
console.log(reverseNumber(-1), -1);
console.log(reverseNumber(1000), 1);
console.log(reverseNumber(-1000), -1);

// A positive or negative number. Always a whole number. Always valid.
// Return the number reversed. Make sure it retains its sign.

// Create a reverse of the number.
// Multiple it by the original sign.
// Return the product.