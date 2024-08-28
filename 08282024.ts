// Count the permutation difference between two strings.

function findPermutationDifference(s: string, t: string): number {
  // Cache each letter and its index from both strings.
  const cache = new Map<string, [number, number]>();

  // Iterate both strings and cache the index of each letter.
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!cache.has(charS)) {
      cache.set(charS, [0, 0]);
    }
    if (!cache.has(charT)) {
      cache.set(charT, [0, 0]);
    }

    cache.get(charS)[0] = i;
    cache.get(charT)[1] = i;
  }

  // Iterate the cache and count the absolute index difference.
  let difference = 0;

  for (const [char, indexes] of cache) {
    difference += Math.abs(indexes[0] - indexes[1]);
  }

  return difference;
}

console.log(findPermutationDifference("abc", "bac"), 2);
console.log(findPermutationDifference("abcde", "edbac"), 12);
// https://leetcode.com/problems/permutation-difference-between-two-strings/

// s: string. 1 <= s.length <= 26. Each character is a lowercase English letter. Each letter appears at most once.
// t: string. 1 <= s.length <= 26. Each character is a lowercase English letter. Each letter appears at most once. Will always contain the same letters as s, but may be in a different order
// Count the index differences between letters in s and t.
