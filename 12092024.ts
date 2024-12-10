// Find starting indices where str2 is an anagram of str1.

function findAnagrams(str1: string, str2: string): number[] {
  if (str2.length > str1.length) {
    return [];
  }

  const targetCount = new Map<string, number>();
  let left = 0;
  let right = 0;
  const anagrams: number[] = [];

  // Populate targetCount with characters from str2
  for (const char of str2) {
    targetCount.set(char, (targetCount.get(char) || 0) + 1);
  }

  while (right < str1.length) {
    // Cache right pointer value
    targetCount.set(str1[right], (targetCount.get(str1[right]) ?? 0) - 1);

    if (targetCount.get(str1[right]) === 0) {
      targetCount.delete(str1[right]);
    }

    // Verify window length
    if (right - left + 1 === str2.length) {
      if (targetCount.size === 0) {
        anagrams.push(left);
      }

      targetCount.set(str1[left], (targetCount.get(str1[left]) ?? 0) + 1);

      if (targetCount.get(str1[left]) === 0) {
        targetCount.delete(str1[left]);
      }

      left++;
    }

    // Increment right pointer
    right++;
  }

  return anagrams;
}

console.log(findAnagrams("cbaebabacd", "abc"), [0, 6]);
console.log(findAnagrams("abab", "ab"), [0, 1, 2]);
// https://leetcode.com/problems/find-all-anagrams-in-a-string

// str1: string. 1 <= str1 <= 3*10^4. Lowercase English letters.
// str2: string. 1 <= str2 <= 3*10^4. Lowercase English letters.
// Return the start indices where str2 is an anagram of str1.
