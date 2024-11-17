// Longest substring length with only unique characters.

function lengthOfLongestSubstring(str: string): number {
  const charCount = new Map<string, number>();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  // Window algorithm.
  while (right < str.length) {
    // Cache the right pointer value.
    charCount.set(str[right], (charCount.get(str[right]) || 0) + 1);

    // If the right pointer value isn't unique, increment the left pointer until it is.
    while (charCount.get(str[right])! > 1) {
      charCount.set(str[left], charCount.get(str[left])! - 1);
      left++;
    }

    // Cache the max length.
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

// str: string. 0 <= s.length <= 5*10^4. Lowercase English letters, digits, symbols, and spaces.
// Return the length of the longest substring without repeating characters.
