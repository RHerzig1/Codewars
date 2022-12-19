// Write an algorithm that returns true or false whether a string is a palindrome.

function palindromeChecker(str) {
  const strLowerCase = str.toLowerCase()
  for (let i = 0; i < str.length / 2; i++) {
    if (strLowerCase[i] !== strLowerCase[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindromeChecker('racecar'), true)
console.log(palindromeChecker('Racecar'), true)
console.log(palindromeChecker('Hello'), false)
console.log(palindromeChecker(''), true)

// A string. Contains 1 word. May be empty. Letters may be uppercase or lowercase. No spaces, numbers, or special characters.
// Return true or false whether the string is a palindrom.

// Convert the string to lowercase.
// Create a for loop to iterate through half the string. Only half the word needs to be checked to confirm if the string is a palidrome.
// Compare characters from both ends.
// If they don't match, return false.
// If they all match, return true.