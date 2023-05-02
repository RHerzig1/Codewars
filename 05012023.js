// Write a function that uses RegEx to validate pins

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN("1"), false);
console.log(validatePIN("123"), false);
console.log(validatePIN("1234"), true);
console.log(validatePIN("12345"), false);
console.log(validatePIN("123456"), true);
console.log(validatePIN("1234567"), false);
console.log(validatePIN("-1234"), false);
console.log(validatePIN("1.234"), false);

// A string containing numbers.
// Return true if the stirng has exactly 4 or 6 numbers.

// Use RegEx and the test() method to return true or false.