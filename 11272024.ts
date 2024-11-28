// Count the maximum vowels inside a substring of length k.

function maxVowels(str: string, k: number): number {
  const vowels = new Set<string>("aeiou");
  let maxVowelCount = 0;
  let currentVowelCount = 0;
  let left = 0;
  let right = 0;

  // Window algorithm.
  while (right < str.length) {
    // Cache the right pointer value.
    if (vowels.has(str[right])) {
      currentVowelCount++;
    }

    // If window is of size, update maxVowelSubstring.
    if (right - left + 1 === k) {
      maxVowelCount = Math.max(maxVowelCount, currentVowelCount);

      // Remove the left pointer value from the cache.
      if (vowels.has(str[left])) {
        currentVowelCount--;
      }

      // Increment the left pointer value.
      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return maxVowelCount;
}

console.log(maxVowels("abciiidef", 3), 3);
console.log(maxVowels("aeiou", 2), 2);
console.log(maxVowels("leetcode", 3), 2);
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length

// str: string. 1 <= s.length <= 10^5. Lowercase letters.
// k: number. 1 <= k <= s.length.
// Count the maximum vowels inside a substring of length k.
