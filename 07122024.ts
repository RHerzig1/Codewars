// Find the lexicographically smallest subsequence of unique characters from a string.

function smallestSubsequence(s: string): string {
  const stack = new Set<string>();

  for (let i = 0; i < s.length; i++) {
      const char = s[i];

      if (stack.has(char)) {
          continue;
      }

      // Don't do this.
      while (char <= Array.from(stack).at(-1) && s.substring(i).includes(Array.from(stack).at(-1))) {
          stack.delete(Array.from(stack).at(-1));
      }

      stack.add(char);
  }

  return Array.from(stack).join("");
}

console.log(smallestSubsequence("bcabc"), "abc");
console.log(smallestSubsequence("cbacdcbc"), "acdb");
// https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

// s: string. 1 <= s.length <= 1000. Consists of lowercase letters.
// Return the lexicographically smallest subsequence of unique characters.

// Iterate
