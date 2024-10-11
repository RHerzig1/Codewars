// Return the longest palindromic substring.

function longestPalindrome(s: string): string {
  let result = s[0];

  for (let i = 1; i < s.length; i++) {
    // At the current index, check for odd lengthed palindrome (e.g. "ABA");
    let left = i - 1;
    let right = i + 1;
    let substringEven = s[left] + s[i] + s[right];

    while (isPalindrome(substringEven)) {
      // Cache the current substring, if longer than result.
      result = substringEven.length > result.length ? substringEven : result;

      // Widen the substring.
      substringEven = s[--left] + substringEven + s[++right];
    }

    // At the current index, check for even lengthed palindrome (e.g. "AA");
    left = i - 1;
    right = i;
    let substringOdd = s[left] + s[right];

    while (isPalindrome(substringOdd)) {
      // Cache the current substring, if longer than result.
      result = substringOdd.length > result.length ? substringOdd : result;

      // Widen the substring.
      substringOdd = s[--left] + substringOdd + s[++right];
    }
  }

  return result;
}

function isPalindrome(s: string): Boolean {
  const reverse = s.split("").reverse().join("");

  return s === reverse;
}

console.log(longestPalindrome("babad"), "bab");
console.log(longestPalindrome("cbbd"), "bb");
console.log(longestPalindrome("bABad"), "b");
// https://leetcode.com/problems/longest-palindromic-substring/

// s: string. 1 <= s.length <= 1000. Consists of digits and English characters.
// Return the longest palindromic substring. Uppercase and lowercase characters do not match.
