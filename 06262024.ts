// Count the substrings with unique characters.

function countGoodSubstrings(s: string): number {
  const chars = new Map<string, number>();
  let subStringCount = 0;
  let SUBSTRINGLENGTH = 3;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    // Cache the right pointer value.
    chars.set(s[right], (chars.get(s[right]) || 0) + 1);

    // Check the window length.
    if (right - left + 1 === SUBSTRINGLENGTH) {
      // Check the contition and increment subStringCount if true.
      if (chars.get(s[left]) === 1 && chars.get(s[right]) === 1) {
        subStringCount++;
      }

      // Increment the left pointer value.
      chars.set(s[left], (chars.get(s[left]) || 1) - 1);

      if (chars.get(s[left]) === 0) {
        chars.delete(s[left]);
      }

      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return subStringCount;
}

console.log(countGoodSubstrings("xyzzaz"), 1);
console.log(countGoodSubstrings("aababcabc"), 4);
// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

// s: string. Lowercase English characters. 1 <= s.length <= 100.
// Return the number of substrings that can be created with all unique characters. Use a length of 3.

// Use the sliding window technique.
