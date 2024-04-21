// Write a function that makes a string good.

function makeGood(s: string): string {
  const stack: string[] = [];

  for (const char of s) {
    const prevChar = stack.at(-1);
    const isSameChar = char.toUpperCase() === prevChar.toUpperCase();

    if (isSameChar && char !== prevChar) {
      stack.pop();
    }

    stack.push(char);
  }

  return stack.join("");
}

console.log(makeGood("leEeetcode"), "Leetcode");
console.log(makeGood("abBAcC"), "");
console.log(makeGood("s"), "s");

// s: string[]. 1 <= s.length <= 100. string[i] consists of uppercase and lowercase English letters.
// Return a good string. A good string has had all instances of lower-case and upper-case versions of the same adjacent letter removed.

// Use a stack to compare the current character with the previous character.
