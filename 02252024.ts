// Write a function that returns whether a string is a palindrome using the two pointer technique.

function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
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

console.log(isPalindrome("A man, a plan, a canal: Panama"), true)
console.log(isPalindrome("race a car"), false)
console.log(isPalindrome(" "), true)
console.log(isPalindrome("0P"), false);

// s: string. May contain uppercase and lowercase letters, symbols, and numbers. 1 <= s.length <= 2 * 10^5. Always valid.
// Return a Boolean indicating whether or not the string is a palindrome.

// Declare two pointers.
// Filter out numbers and symbols from the string. Make it lowercase.
// Iterate through both ends and check that the letters are the same.
// If not, return false.
// Stop iterating at the halfway point.
// After iterating, return true.
