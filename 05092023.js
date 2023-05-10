// Write a function that returns whether a string is a palindrome.

function isPalindrome(str) {
  const arr = str.toLowerCase().split("");

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("Racecar"), true);
console.log(isPalindrome("Hello"), false);
console.log(isPalindrome(""), true);

// A string containing a word. May include uppercase and lowercase letters. No punctuation or spaces.
// Return true or false whether the word is the same forwards as it is backwards. This function is case-insensitive.

// Make str lowercase.
// Split into array.
// Iterate through using a for loop.
// Compare the front of the string with the back.
// If they aren't the same, return false.
// After iterating, return true.
