// Transform a string into a palindrome using as few changes as possible.

function makeSmallestPalindrome(s: string): string {
  let left = 0;
  let right = s.length - 1;
  const chars = s.split("");

  while (left < right) {
    const leftChar = chars[left];
    const rightChar = chars[right];

    if (leftChar < rightChar) {
      chars[right] = leftChar;
    } else if (leftChar > rightChar) {
      chars[left] = rightChar;
    }

    left++;
    right--;
  }

  return chars.join("");
}

console.log(makeSmallestPalindrome("egcfe"), "efcfe");
console.log(makeSmallestPalindrome("abcd"), "abba");
console.log(makeSmallestPalindrome("seven"), "neven");
// https://leetcode.com/problems/lexicographically-smallest-palindrome/

// s: string. 1 <= s.length <= 1000. Lower case English characters.
// Transform the string into a palindrome using as few changes as possible. When choosing between two characters, always choose the lexicographically smaller letter.
