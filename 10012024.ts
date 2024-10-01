// Hashed divided string.

function stringHash(s: string, k: number): string {
  const substrings: string[] = [];
  let substring = "";
  const result: string[] = [];

  // Divide s into substrings with length of k.
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    substring += char;

    if (substring.length >= k) {
      substrings.push(substring);
      substring = "";
    }
  }

  // Apply the rules to each substring.
  for (const substring of substrings) {
    const sum = substring
      .split("")
      .map((elem) => elem.charCodeAt(0) - 97)
      .reduce((a, b) => a + b, 0);
    const hashedChar = sum % 26;
    const char = String.fromCharCode(hashedChar + 97);
    result.push(char);
  }

  return result.join("");
}

console.log(stringHash("abcd", 2), "bf");
console.log(stringHash("mxz", 3), "i");
// https://leetcode.com/problems/hash-divided-string/

// s: string. k <= s.length <= 1000. s.length is divisible by k. s consists only of lowercase English letters.
// k: number. 1 <= k <= 100.
// Return a new string after applying a series of rules.
