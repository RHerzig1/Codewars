// Write a function that returns the number of unique substrings with unique characters.

function countGoodSubstrings(s: string): number {
  let charMap = new Map<string, number>();
  let count = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    // Cache the right pointer value.
    charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);

    // If the width is correct, continue with the count and left pointer.
    if (right - left === 2) {
      // If the left and right pointers both have appear only once, increment the count variable.
      if (charMap.get(s[left]) === 1 && charMap.get(s[right]) === 1) {
        count++;
      }

      // Increment the left pointer.
      charMap.set(s[left], (charMap.get(s[left]) || 1) - 1);
      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return count;
}

console.log(countGoodSubstrings("xyzzaz"), 1);
console.log(countGoodSubstrings("aababcabc"), 4);

// s: string. Lowercase English characters. 1 <= s.length <= 100.
// Return the number of substrings that can be created with all unique characters. Use a length of 3.

// Use the sliding window technique.
