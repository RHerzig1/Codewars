// Test whether string is palindrome
// Using the provided string, create a test that indicates whether or not it is a palindrome (spells the same word when letters are reversed).

function isPalindrome(line) {
  return line == [...line].reverse().join('');
}

// The parameter is a string containing uppercase and lowercase letters.
// Return a boolean indicating whether or not the string is a palindrome. This test is case sensitive.
// "anna" -> true
// "banana" -> false
// Compare line with line reversed.
// Return the boolean.