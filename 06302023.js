// Write a function that determines whether or not parenthesis are valid

function isValidParenthesis(str) {
  if (str.length % 2 === 1) {
    return false;
  }

  let count = 0;

  for (const char of str) {
    char === "(" ? count++ : count--;

    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}

console.log(isValidParenthesis("()()()"), true);
console.log(isValidParenthesis("()(())"), true);
console.log(isValidParenthesis("(()(()))"), true);
console.log(isValidParenthesis(")("), false);
console.log(isValidParenthesis(")"), false);
console.log(isValidParenthesis("("), false);
console.log(isValidParenthesis(""), true);

// A string of opening and closing parenthesis. May be any length and any order. May be empty.
// Return true or false, indicating whether or not the parenthesis are valid in number and order.

// Check that length is even. Else, return false.
// Declare a count variable equal to 0.
// Iterate through the string.
// If parenthesis is open, count++.
// If parenthesis is closed, count--.
// If count < 0, return false.
// After iterating, return count === 0.
