// Write a function that determines whether a string of parenthesis is valid.

function isValid(str) {
  let count = 0;

  for (const char of str) {
    if (char === "(") {
      count++;
    } else if (char === ")") {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}

console.log(isValid("()"), true);
console.log(isValid("(()())"), true);
console.log(isValid(")("), false);
console.log(isValid("("), false);

// A string of opening and closing parenthesis. No other characters. May be in any amount or order.
// Return a Boolean indicating whether the parathesis are valid. Valid parenthesis will a start with an open and have a matching closing.

// Create a count variable equal to 0.
// Iterate through the string.
// If the character is '(', increment count.
// If the character is ')', decrement count.
// If count goes below 0, return false.
// After iterating, return count === 0.
