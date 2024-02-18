// Write a function that returns whether or not a string of parentheses is valid.

function isValid(s: string): boolean {
  const ref = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  const stack: string[] = [];

  for (const char of s) {
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else {
      const lastChar = stack.pop();

      if (lastChar !== ref[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"), true);
console.log(isValid("()[]{}"), true);
console.log(isValid("([{}])"), true);
console.log(isValid("([{]})"), false);
console.log(isValid("(["), false);

// s: string[]. 1 <= s.length <= 10^4. s only contains these characters: '()[]{}'.
// Return true or false whether the parenthesis are valid.
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

// Delcare a reference object to compare open and close characters.
// Declare a stack.
// Iterate the string.
// If the character is property of ref, push it to the stack.
// Else, pop the counterpart from the stack.
// If the counterpart isn't top of stack, return false.
// After iterating, return true if the stack is empty. Otherwise return false.
