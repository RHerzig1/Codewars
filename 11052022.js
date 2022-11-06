// Check string for valid parenthesis, brackets, and braces

const isValid = function(s) {
  if (s.length % 2 === 1) return false
  const stack = []
  const legend = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    if (Object.hasOwn(legend, s[i])) {
      stack.push(s[i])
    } else if (s[i] !== legend[stack.pop()]) {
      return false
    }
  }
  return stack.length === 0
};

console.log(isValid('()')) // true
console.log(isValid('([{}])')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('([{])')) // false

// String, only containing (, ), [, ], {, and/or }. Never empty string. Never anything but a string.
// True if each bracket has a matching pair, or false if they don't.

// If string length is odd, return false.
// Declare an empty stack array.
// Declare a legend object containing open : closed.
// Loop through the string.
// If the char is in legend, push it to the stack.
// Else if the char is not at the end of the stack, return false.
