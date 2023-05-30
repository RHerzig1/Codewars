// Write a function that finds the greatest consecutive 5 digit integer from a string of numbers.

function findMaxDigits(digits) {
  const arr = [];
  for (let i = 0; i < digits.length - 4; i++) {
    arr.push(digits.slice(i, i + 5));
  }
  return Math.max(...arr);
}

console.log(findMaxDigits("1234567898765"), 98765);
console.log(findMaxDigits("731674765"), 74765);

// A string containing only numbers 0-9. Length of at least 5.
// Return the largest number possible using 5 consecutive digits.

// Delcare a caching array.
// Iterate through the parameter.
// Push each series of 5 digits into the cache.
// Return the largest number from the cache.