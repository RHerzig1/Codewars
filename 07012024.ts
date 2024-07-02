// Count the subarrays that contain at least one instance of "a", "b", and "c".

function numberOfSubstrings(s: string): number {
  const charCache = new Map<string, number>();
  let substringCount = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    // Cache the right pointer value.
    charCache.set(s[right], (charCache.get(s[right]) || 0) + 1);

    // Check all three characters are present in the window.
    while (charCache.get("a") && charCache.get("b") && charCache.get("c")) {
      // Increase substringCount.
      substringCount += s.length - right;

      // Remove the left pointer value from the cache.
      charCache.set(s[left], (charCache.get(s[left]) || 1) - 1);

      // Increment the left pointer.
      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return substringCount;
}

console.log(numberOfSubstrings("abcabc"), 10);
console.log(numberOfSubstrings("aaacb"), 3);
// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

// s: string. 3 <= s.length <= 5*10^4. s[i] consists of "a", "b", and "c".
// Return a count of substrings that contain at least one of each character. Include duplicates.

// Use a sliding window algorithm.
