// Write a function that returns the maximum nesting depth of parenthese using a stack.

function maxDepth(s: string): number {
  let maxLength = 0;
  let stack: string[] = [];

  for (const char of s) {
    if (char === "(") {
      stack.push("(");
      maxLength = Math.max(maxLength, stack.length);
    } else if (char === ")") {
      stack.pop();
    }
  }

  return maxLength;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1"), 3);
console.log(maxDepth("(1)+((2))+(((3)))"), 3);
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

// s: string. A string containing valid parenthesis. 1 <= s.length <= 100.
// Return a number indicating the maximum nesting depth of parentheses.

// Declare a stack.
// Add opening parenthesis to the stack, remove them with closing parenthesis.
// During each iteration, record the maximum length.
// Return the length.
