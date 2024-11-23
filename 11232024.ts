// Count of substrings with all three characters at least once.

function numberOfSubstrings(str: string): number {
  const cache = {
    a: 0,
    b: 0,
    c: 0,
  };
  let subStringCount = 0;
  let left = 0;
  let right = 0;

  // Window algorithm.
  while (right < str.length) {
    // Cache right pointer value.
    cache[str[right]] = cache[str[right]] + 1;

    // Check all three characeters are in substring.
    while (cache["a"] > 0 && cache["b"] > 0 && cache["c"] > 0) {
      // Increment subStringCount for all subsequent combinations and 
      subStringCount += str.length - right;
      cache[str[left]] = cache[str[left]] - 1;
      left++;
    }

    // Increment right pointer.
    right++;
  }

  return subStringCount;
}

console.log(numberOfSubstrings("abcabc"), 10);
console.log(numberOfSubstrings("aaacb"), 3);
console.log(numberOfSubstrings("abc"), 1);
console.log(numberOfSubstrings("aaa"), 0);
// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

// str: string. 3 <= s.length <= 5 x 10^4. Contains only "a", "b", and "c".
// Return a count of substrings that contain all 3 characters at least once.
