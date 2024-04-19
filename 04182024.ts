// Write a function that returns the number of substrings that contain all three characters at least once.

function numberOfSubstrings(s: string): number {
  const charMap = new Map<string, number>();
  let count = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    // Cache the right pointer value.
    charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);

    // Verify the condition, then increment the left pointer.
    while (charMap.get("a") && charMap.get("b") && charMap.get("c")) {
      count += s.length - right;
      charMap.set(s[left], (charMap.get(s[left]) || 1) - 1);
      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return count;
}

console.log(numberOfSubstrings("abcabc"), 10);
console.log(numberOfSubstrings("aaacb"), 3);
console.log(numberOfSubstrings("abc"), 1);

// s: string. Consists only of "a", "b", and "c". 3 <= s.length <= 5*10^4.
// Return the number of substrings that contain all three characters at least once.

// Use the sliding window method.
// Keep a count of all the characters using a map.
