// Write a function that returns the maximum length of a substring containing no more than 2 occurances of each character.

function maximumLengthSubstring(s: string): number {
  let charMap = new Map<string, number>();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    // Add the right pointer character to the map.
    charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);

    // If the right pointer character becomes greater than 2, increment the left pointer until it becomes 2 again.
    while (charMap.get(s[right])! > 2) {
      charMap.set(s[left], (charMap.get(s[left]) || 1) - 1);
      left++;
    }

    // Calculate the length and increase maxLength, if possible.
    maxLength = Math.max(maxLength, right - left + 1);

    // Increment the right pointer.
    right++;
  }

  return maxLength;
}

console.log(maximumLengthSubstring("bcbbbcba"), 4); // bcba
console.log(maximumLengthSubstring("aaaa"), 2); // aa
console.log(maximumLengthSubstring("eebadadbfa"), 9); // eebadadbf
console.log(maximumLengthSubstring("bcbbbcba"), 4); // bcba
// https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/description/

// s: string. Lowercase English characters. 2 <= s.length <= 100.
// Return the maximum length of a substring that contains no more than two occurances of each character.

// Use the sliding window technique.
