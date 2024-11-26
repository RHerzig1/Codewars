// Return the length of the longest substring in which the frequency of each character is greater than k.

function longestSubstring(str: string, k: number): number {
  const charCount = new Map<string, number>();

  // Count the frequency of all characters in str.
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Check for characters with frequency less than k.
  for (const [char, count] of charCount) {
    if (count < k) {
      // Split the string by this character and solve for each segment
      const substrings = str.split(char);
      let maxLength = 0;

      for (const substring of substrings) {
        maxLength = Math.max(maxLength, longestSubstring(substring, k));
      }

      return maxLength;
    }
  }

  // If all characters meet the frequency condition, return the string length
  return str.length;
}

console.log(longestSubstring("aaabb", 3), 3);
console.log(longestSubstring("ababbc", 2), 5);
console.log(longestSubstring("abacbb", 2), 2);
// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters

// str: string. 1 <= s.length <= 10^4. Lowercase letters.
// k: number. 1 <= k <= 10^5.
// Return the length of the longest substring in which the frequency of each character is greater than k.
