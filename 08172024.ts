// Reverse an array in-place.

/**
 Do not return anything, modify s in-place instead.
 */
 function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
      const hold = s[left];
      s[left] = s[right];
      s[right] = hold;

      left++;
      right--;
  }
};

console.log(reverseString(["h", "e", "l", "l", "o"]), ["o", "l", "l", "e", "h"]);
// https://leetcode.com/problems/reverse-string/

// s: string[]. 1 <= s.length <= 10^5. s[i] is a printable ascii character.
// Reverse the array in-place. Do not return anything.