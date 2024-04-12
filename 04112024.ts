// Write a function that removes duplicate consecutive characters from a string.

function removeDuplicates(s: string): string {
  const stack: string[] = [];

  for (const char of s) {
    if (stack.at(-1) === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

console.log(removeDuplicates("abbaca"), "ac");
console.log(removeDuplicates("azxxzy"), "ay");

// s: string[]. Lowercase english characters only. 1 <= s.length <= 10^5.
// Return a string consisting of the letters after all consecutive characters were removed.

// Use a stack.