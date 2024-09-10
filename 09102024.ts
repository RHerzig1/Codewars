// Count the balanced strings.

function balancedStringSplit(s: string): number {
  let chars = 0;
  let count = 0;

  for (const char of s) {
    chars = chars + (char === "L" ? -1 : 1);

    if (chars === 0) {
      count++;
    }
  }

  return count;
}

console.log(balancedStringSplit("RLRRLLRLRL"), 4); // "RL", "RRLL", "RL", "RL"
console.log(balancedStringSplit("RLRRRLLRLL"), 2); // "RL", "RRRLLRLL"
console.log(balancedStringSplit("LLLLRRRR"), 1); // "LLLLRRRR"
// https://leetcode.com/problems/split-a-string-in-balanced-strings/

// s: string. 2 <= s.length <= 1000. s[i] is either 'L' or 'R'. It is already balanced.
// Return the maximum number of balanced substrings.
// A balanced substring is one that contains an equal count of 'L' and 'R'. Must have at least one of each.
