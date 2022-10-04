 // Reverse a string

function reverseString(message) {
  return [...message].reverse().join('')
}

console.log(
reverseString("   The white space at the beginning of this string doesn't match the whitespace at the end. ")
)

 // The parameter is a non-empty string containing letters, spaces, and numbers.
 // Return the string after reversing all the characters.
 // "Hello World!" -> "!dlroW olleH"
 // Split the message.
 // Reverse the message array.
 // Rejoin the message and return it.