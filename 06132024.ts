// Return the longest substring without repeating characters using a sliding window algorithm.

function lengthOfLongestSubstring(s: string): number {
  const charMap = new Map<string, number>();
  let left = 0;
  let right = 0;
  let maxLength = 0;

  while (right < s.length) {
    // Increment the right pointer character count.
    charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);

    // If the right pointer character count exceeds 1, increment the left pointer to reduce the count.
    while (charMap.get(s[right]) > 1) {
      charMap.set(s[left], (charMap.get(s[left]) || 1) - 1);
      left++;
    }

    // Update the maximum length of the substring found so far.
    maxLength = Math.max(maxLength, right - left + 1);

    // Increment the right pointer.
    right++;
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"), 3);
console.log(lengthOfLongestSubstring("bbbbb"), 1);
console.log(lengthOfLongestSubstring("pwwkew"), 3);
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// s: string. 0 <= s.length <= 5*10^4. s[i] may be English letters, digits, symbols, and spaces.
// Return the length of the longest substring without repeating characters.

// Use a sliding window algorithm.
// Declare a map to store the count of each character.
// Declare a maxLength variable.
