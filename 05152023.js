// Write a function that counts the number of times an integer appears within elements of an array.

function countDigit(num, digit) {
  const numArr = [...Array(num + 1).keys()].map(elem => Math.pow(elem, 2))
  let count = 0
  
  for (const elem of numArr) {
    for (const char of String(elem)) {
      if (char === String(digit)) {
        count++
      }
    }
  }
  
  return count
}

console.log(countDigit(5750, 0), 4700);
console.log(countDigit(11011, 2), 9481);
console.log(countDigit(12224, 8), 7733);
console.log(countDigit(11549, 1), 11905);

// Two integers, num and digit. Num >= 0. Digi >= 0 && <= 9.
// Count the number of times digit appears in an array of 0 - num, after each value is squared.

// Create an array of integers, starting with 0 and up to num. Square each value.
// Iterate through each element.
// Iterate through each digit.
// If the digit matches the parameter, increase a count by one.
// Return count.