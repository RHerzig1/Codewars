// Multiply word from array

function modifyMultiply (str,loc,num) {
  str = str.split(' ')
  return Array(num).fill(str[loc]).join('-')
}

// The parameters are a string and two integers. Use the first integer to select a word from the string and the second integer is the number of times to repeat it.
// Return a string containing the word repeated. Seperate each word with a hyphen.
// "Hello world", 1, 2 -> "world-world"
// Split the string into an array where each element is a word.
// Use the 2nd integer to isolate the correct word.
// Create a new array and repeat the word using the 3rd integer.
// Join with a hyphen and return the result.