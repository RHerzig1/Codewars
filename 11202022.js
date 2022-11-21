// Return first palindrome number above argument

function nextPal(val) {
  const testPalindrome = function(num) {
    let arr = String(num).split('')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[arr.length - i - 1]) {
        return false
      }
    }
    return true
  }
  
    for (let i = val + 1; i > val; i++) {
      if (testPalindrome(i)) {
        return i
      }
    }
}

// A number > 10. Always a whole number. Always valid. Nothing valid.
// Return the closest palindrome number above the parameter.

// Increment up.
// Test whether it's a palindrome.
// If so, return it.
// Else, increment up again.