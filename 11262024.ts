// Return true if s2 contains a permutation of s2.

function checkInclusion(s1: string, s2: string): boolean {
  const charMap = new Map<string, number>();
  const charCount = new Map<string, number>();
  let left = 0;
  let right = 0;
  let length = s1.length;

  // Count the frequency of every char in s1.
  for (const char of s1) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  while (right < s2.length) {
    // Decrement the right pointer value.
    charCount.set(s2[right], (charCount.get(s2[right]) || 0) + 1);

    // Increment the left pointer to prevent window window from exceeding length.
    if (right - left === length) {
      charCount.set(s2[left], charCount.get(s2[left])! - 1);

      if (charCount.get(s2[left]) === 0) {
        charCount.delete(s2[left]);
      }

      left++;
    }

    // If charCount and charMap are the same size, verify whether they match.
    if (charCount.size === charMap.size) {
      let identical = true;

      for (const [char, count] of charCount) {
        if (charMap.get(char) !== count) {
          identical = false;
          break;
        }
      }

      if (identical) {
        return true;
      }
    }

    // Increment the right pointer.
    right++;
  }

  return false;
}

console.log(checkInclusion("ab", "eidbaooo"), true);
console.log(checkInclusion("ab", "eidboaoo"), false);
console.log(checkInclusion("adc", "dcda"), true);

// s1: string. 1 <= s1.length <= 10^4. Lowercase letters.
// s2: string. 1 <= s1.length <= 10^4. Lowercase letters.
// Return true if s2 contains a permutation of s2. A permutation is a substring that contains all the same characters at the same frequency, in any order, without including any additional characters.
