// Write a function that returns the number of bits in a binary number.

function countBits(num) {
  const binary = num.toString(2)
  return binary.split('').filter(elem => elem === '1').length
}

console.log(countBits(0), 0);
console.log(countBits(1), 1);
console.log(countBits(25), 3);

// A positive integer.
// Return the number of bits, or 1s, that appear in the binary conversion of that number.

// Convert the number to binary.
// Convert to an array and filter out the 1s.
// Return the length of the filter.