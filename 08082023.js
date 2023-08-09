// Write a function that returns the length of the largest palindrome in a continuous string.

function longestPalindrome(str) {
  let maxLength = 0;
  let subLength = 0;

  while (subLength <= str.length) {
    for (let i = 0; i <= str.length; i++) {
      const subStr = str.slice(i, i + subLength);

      if (subStr === subStr.split("").reverse().join("")) {
        maxLength = Math.max(maxLength, subStr.length);
      }
    }

    subLength++;
  }

  return maxLength;
}

console.log(longestPalindrome("abcdcbe"), 5);
console.log(longestPalindrome("abcdcbxyz"), 5);
console.log(longestPalindrome("11111112"), 7);
console.log(longestPalindrome("a"), 1);
console.log(longestPalindrome(""), 0);

// A string containing only letters and numbers. Length >= 0.
// Return a number representing the length of the longest palindrome, or 0 if none exist.

// Iterate through the str multiple times.
// Each time, increase the size of the substring.
// Check each substring for palindrome.
// If it is, log that length.
// Return the largest length.
