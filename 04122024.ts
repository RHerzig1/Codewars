// Write a function that returns the minimum string length after removing substrings.

function minLength(s: string): number {
  const stack: string[] = [];

  for (const char of s) {
    if (stack.at(-1) === "A" && char === "B") {
      stack.pop();
    } else if (stack.at(-1) === "C" && char === "D") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length;
}

console.log(minLength("ABFCACDB"), 2); // "FC"
console.log(minLength("ACBBD"), 5); // "ACBBD"
// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/

// s: string. Consists of only uppercase English letters. 1 <= s.length <= 100.
// Return the length of the string after all occurances of "AB" and "CD" are removed.

// Use a stack.
