// Write a function that sums the integers within a mixed string.

function sumOfIntegersInString(str) {
  return str.split(/\D+/).reduce((a, c) => Number(a) + Number(c));
}

console.log(sumOfIntegersInString("12.4"), 16);
console.log(sumOfIntegersInString("h3ll0w0rld"), 3);
console.log(sumOfIntegersInString("2 + 3 = "), 5);

// A string containing upper and lowercase letters, numbers, spaces, and special characters. 0 <= length <= 100.
// Return the sum of all the intgers in the string. Concurrent numbers should act as a single number.

// Split the string along any non-integer character and reduce.
