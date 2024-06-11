// Return whether or not a string is a palindrome.

function isPalindrome(s: string): boolean {
  s = s.replace(/[^\w]|_/g, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"), true);
console.log(isPalindrome("race a car"), false);
console.log(isPalindrome(" "), true);
// https://leetcode.com/problems/valid-palindrome

// s: string. 1 <= s.length <= 2 * 10^5. s[i] may be an uppercase letter, lowercase letter, number, space, punctuation.
// Return true or false if the string is a palindrome. Make all letters lowercase and remove all spaces and punctuation. Keep all alphanumeric characters.

// Transform the string.
// Use a two pointer algorithm.