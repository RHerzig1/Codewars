// Write a function that generates all combinations of n pairs of parentheses.

function generateParenthesis(n: number): any {
  const result: string[] = [];
  const stack: string[] = [];

  function backTrack(openCount, closeCount) {
    if (openCount === n && closeCount === n) {
      result.push(stack.join(""));
      return;
    }

    if (openCount < n) {
      stack.push("(");
      backTrack(openCount + 1, closeCount);
      stack.pop();
    }

    if (openCount > closeCount) {
      stack.push(")");
      backTrack(openCount, closeCount + 1);
      stack.pop();
    }
  }

  backTrack(0, 0);
  return result;
}

console.log(generateParenthesis(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
console.log(generateParenthesis(1), ["()"]);

// n: number. 1 <= n <= 8. Always a valid integer.
// Return string[] where each element represents a different well-formed and unique arrangement of parentheses. All valid combinations must be included in the output.

// https://www.youtube.com/watch?v=s9fokUqJ76A
