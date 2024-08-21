// Construct a ransom note using characters from a magazine.

function canConstruct(ransomNote: string, magazine: string): boolean {
  const charCount = new Map<string, number>();

  // Count characters in magazine.
  for (const char of magazine) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Subtract characters from ransomNote.
  for (const char of ransomNote) {
    if (charCount.get(char) > 0) {
      charCount.set(char, (charCount.get(char) || 1) - 1);
    } else {
      // Not enough characters available.
      return false;
    }
  }

  return true;
}

console.log(canConstruct("a", "b"), false);
console.log(canConstruct("aa", "ab"), false);
console.log(canConstruct("aa", "aab"), true);
// https://leetcode.com/problems/ransom-note/

// ransomNote: string. 1 <= ransomNote.length <= 10^5. Lowercase letters only.
// magazine: string. 1 <= magazine.length <= 10^5. Lowercase letters only.
// Return true or false if ransomNote can be written using only letters from magazine. Each character can only be used once.
