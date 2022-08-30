// Reverse word order from string

function reverse(string){
  return string.split(' ').reverse().join(' ');
}

// The parameter is a string containing mulitple words.
// Return the string but with the order of the words reversed.
// "Hello world!" -> "world! Hello"
// Split the string.
// Reverse the string.
// Join the string.