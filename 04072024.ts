// Write a function that removes the outmost set(s) of parentheses from a string using a stack.

function removeOuterParentheses(s: string): string {
  let stack = 0;
  let result: string[] = [];

  for (const char of s) {
    if (char === "(") {
      if (stack > 0) {
        result.push(char);
      }

      stack++;
    } else {
      stack--;

      if (stack > 0) {
        result.push(char);
      }
    }
  }

  return result.join("");
}

console.log(removeOuterParentheses("(()())(())"), "()()()");
console.log(removeOuterParentheses("(()())(())(()(()))"), "()()()()(())");
console.log(removeOuterParentheses("()()"), "");
// https://leetcode.com/problems/remove-outermost-parentheses/

// s: string. A series of valid parentheses. Always valid. 1 <= s.length <= 10^5. s[i] is '(' or ')'.
// Return a string with the outmost set(s) of parentheses removed.

// Declare a stack.
// Delcare a results array.
// Iterate the string.
// If char is an open parenthesis, push the char into the results array unless the stack is empty.
// Add char to the stack.
// If char is a close parentheses, pop the stack.
// Push the char into the result unless the stack is empty.
// Join and return the result.
