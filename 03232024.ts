// Write a function that returns the length of the longest substring after replacing characters.

function characterReplacement(s: string, k: number): number {
  let charMap = new Map<string, number>();
  let left = 0;
  let maxLength = 0;
  let maxFreq = 0;

  for (let right = 0; right < s.length; right++) {
    // Increment the frequency count by 1 upon encountering a character.
    charMap.set(s[right], (charMap.get(s[right])! || 0) + 1);

    // Maximum frequency of any character encountered so far in the current window.
    maxFreq = Math.max(maxFreq, charMap.get(s[right])!);

    // Move the left pointer until reaching `k` replacements.
    if (maxFreq + k < right - left + 1) {
      charMap.set(s[left], charMap.get(s[left])! - 1);
      left++;
    }

    // Calculate the longest repeating character.
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(characterReplacement("ABAB", 2), 4);
console.log(characterReplacement("AABABBA", 1), 4);

// s: string. Uppercase English characters. 1 <= s.length <= 10^5.
// k: number. The number of characters that can be replaced. 0 <= k <= s.length.
// Return the length of the longest substring possible after replacing k instances of the same single character.
