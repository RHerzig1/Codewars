// Write a function that validates an ISBN-10 identifier.

function validISBN10(isbn) {
  if (isbn.length !== 10) {
    return false;
  }

  const arr = [...isbn];

  if (arr[9] === "X") {
    arr[9] = 10;
  }

  return arr.reduce((a, c, i) => a + c * (i + 1), 0) % 11 === 0;
}

console.log(validISBN10("1112223339"), true);
console.log(validISBN10("111222333"), false);
console.log(validISBN10("1112223339X"), false);
console.log(validISBN10("1234554321"), true);
console.log(validISBN10("1234512345"), false);
console.log(validISBN10("048665088X"), true);
console.log(validISBN10("X123456788"), false);

// A string of numbers and uppercase letters.
// Return true or false, indicating whether the parameter is valid. To be valid:
// The string must be 10 characters long. All numbers except the last, which may be X (meaining 10).
// Multiply each digit by it's index (start at 1). Modulo 11. It should equal 0 if valid.

// If length isn't 10, return false.
// Split into array.
// Convert last elem to 10, if 'X'.
// Convert each elem to number.
// If any aren't a number, return -1.
// Calculate the sum and modulo 11.
// If resul is 0, return true.
// Else false.
