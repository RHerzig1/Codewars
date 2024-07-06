// Determine whether parentheses are valid.

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    const prev = stack.pop();

    if (char === ")" && prev === "(") {
      continue;
    } else if (char === "]" && prev === "[") {
      continue;
    } else if (char === "}" && prev === "{") {
      continue;
    }

    return false;
  }

  return stack.length === 0;
}

console.log(isValid("()"), true);
console.log(isValid("()[]{}"), true);
console.log(isValid("(]"), true);

// s: string. 1 <= s.length <= 10^4. Consists of "(", ")", "[", "]", "{", "}".
// Return true or false whether the the parenthese are valid.
