// Given a number, return an array of all valid parenthesis pairs.

function balancedParens(num: number): string[] {
  const result: string[] = [];

  (function generateParens(str = "") {
    // Base case
    if (str.length === num * 2) {
      result.push(str);
    }

    // Recursive case
    const openCount: number = countCharInString(str, "(");
    const closeCount: number = countCharInString(str, ")");

    if (openCount < num) {
      generateParens(str + "(");
    }

    if (openCount > closeCount) {
      generateParens(str + ")");
    }
  })();

  return result;
}

function countCharInString(str: string, char: string): number {
  let count = 0;

  for (const letter of str) {
    if (letter === char) {
      count++;
    }
  }

  return count;
}

console.log(balancedParens(0).sort(), [""]);
console.log(balancedParens(1).sort(), ["()"]);
console.log(balancedParens(2).sort(), ["(())", "()()"]);
console.log(balancedParens(3).sort(), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
console.log(balancedParens(4).sort(), ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"]);

// num: number. 0 <= num <= 100. Always valid integer.
// Return every valid pair using the number of parenthesis indicated. They can be in any order.
