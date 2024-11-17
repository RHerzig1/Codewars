// Count the substrings with length of 3 and unique characters.

function countGoodSubstrings(s: string): number {
  const cache = new Map<string, number>();
  let left = 0;
  let right = 0;
  let count = 0;

  // Sliding window algorithm
  while (right < s.length) {
    // Cache the right pointer value.
    cache.set(s[right], (cache.get(s[right]) || 0) + 1);

    // If window has desired length, check for unique values and increment left pointer.
    if (right - left === 2) {
      if (cache.get(s[right]) === 1 && cache.get(s[left]) === 1) {
        count++;
      }

      // Remove left pointer value from cache and increment.
      cache.set(s[left], (cache.get(s[left]) || 1) - 1);
      left++;
    }

    // Increment right pointer.
    right++;
  }

  return count;
}

console.log(countGoodSubstrings("xyzzaz"), 1);
console.log(countGoodSubstrings("aababcabc"), 4);
// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

// s: string. 1 <= s.length <= 100. Lowercase English letters.
// Return a count of substrings, with a length of 3, that contains only unique characters.
