// Write a function that builds a string with a [backspace] feature.

function solve(str) {
  str = str.replace(/\[backspace\](?:\*(\d+))?/g, (_, m) => "?".repeat(m || 1));
  const stack = [];

  for (const char of str) {
    if (char === "?") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

console.log(solve("[backspace]*1a"), "a");
console.log(solve("ooppp[backspace]*2s"), "oops");
console.log(solve("oop[backspace]*1oo[backspace]*2pppp[backspace]*3s"), "oops");
