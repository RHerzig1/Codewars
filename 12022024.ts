// Count the substrings where '0' or '1' has a count <= k.

function countKConstraintSubstrings(str: string, k: number): number {
  let zero = 0;
  let one = 0;
  let left = 0;
  let right = 0;
  let count = 0;

  // Window algorithm
  while (right < str.length) {
    // Cache right pointer value
    str[right] === "0" ? zero++ : one++;

    // Validate the condition
    while (zero > k && one > k) {
      str[left] === "0" ? zero-- : one--;
      left++;
    }

    // Update count
    count += right - left + 1;

    // Increment right pointer
    right++;
  }

  return count;
}

console.log(countKConstraintSubstrings("10101", 1), 12);
console.log(countKConstraintSubstrings("1010101", 2), 25);
console.log(countKConstraintSubstrings("11111", 1), 15);
console.log(countKConstraintSubstrings("000011", 1), 18);
// https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i

// str: string. 1 <= s.length <= 50. s[i] === '0' || '1'. Binary string.
// k: number. 1 <= k <= s.length. Target count.
// Count the substrings where '0' or '1' has a count <= k.
