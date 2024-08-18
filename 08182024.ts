// Return the first unique character of a string.

function firstUniqChar(s: string): number {
  // Declare cache.
  const cache = new Map<string, number>();

  // Iterate the dataset and count each character.
  for (const char of s) {
      cache.set(char, (cache.get(char) || 0) + 1);
  }

  // Iterate the dataset and return the index of the first character with a count of 1.
  for (const prop of cache) {
      console.log(prop, prop[0], prop[1]);
  }
  

  return -1;
};

console.log(firstUniqChar("leetcode"), 0);
console.log(firstUniqChar("loveleetcode"), 2);
console.log(firstUniqChar("aabb"), 0);
// https://leetcode.com/problems/first-unique-character-in-a-string/

// s: string. 1 <= s.length <= 10^5. s consists of only lowercase English letters.