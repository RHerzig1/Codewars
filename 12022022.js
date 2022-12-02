// Reverse a string without using the reverse method

function reverseString(str) {
  let reversedString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }
  return reversedString
}

console.log(reverseString('Hello world!')) // '!dlrow olleH'

// Parameter will always be a string with length > 0. May contain letters, numbers, special characters. Keep casing the same.
// Return the reversed string. Do not use the reverse() method.

// Declare a results variable equal to empty string.
// Loop through parameter backwards, concatenate char to string.
// Return result.