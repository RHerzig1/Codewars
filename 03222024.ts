// Write a function that returns the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set();
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    result = Math.max(result, right - left + 1);
    charSet.add(s[right]);
  }

  return result;
}

console.log(lengthOfLongestSubstring("abcabcbb"), 3);
console.log(lengthOfLongestSubstring("bbbbb"), 1);
console.log(lengthOfLongestSubstring("pwwkew"), 3);

// s: string. Lowercase English characters. 0 <= s.length <= 5*10^4.
// Return the length of the longest subsequence without any repeating characters.

// Declare a charSet, result, and left and right pointers.
// Increment the right pointer and cache each value in the array.
// If the left pointer is already on this value, delete it from the set and increment the left pointer.
// Track the max distance after each movement.
// Return the result.
