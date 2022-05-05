// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  x = x.toLowerCase()
  let splitString = x.split('').reverse().join('')
  if (splitString === x) {
    return true
  }
  return false
}

isPalindrome()

// P: A string.
// R: True or false
// E: 'Abba' -> true
// P: Split the string into an array, reverse the array, and if the reverse matches the original then return true.