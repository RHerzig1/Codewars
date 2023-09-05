// Write a function that returns all digits from a string.

function filterString(str) {
  return Number(str.replace(/[^\d]/g, ""));
}

console.log(filterString("He11o, W0rld5"), 1105);
console.log(filterString("1105"), 1105);

// A string containing letters and digits. Always a valid string.
// Return the digits as a number.

// User regex.