// Write an algorithm that returns the hamming distance of two strings

function hamming(a,b) {
	let count = 0;
  
  for ( let i = 0; i < a.length; i++ ) {
    if ( a[i] !== b[i] ) {
      count++;
    }
  }
  
  return count;
}

console.log(hamming('hello world', 'Hello World'), 2)
console.log(hamming('Hello World', 'Hello World'), 0)
console.log(hamming('', ''), 0)

// Two strings of equal lengths. Both may be empty.
// Return the hamming distance: the number of characters that aren't equal. Case sensitive.

// Declare a count variable equal to 0.
// Iterate through both strings using a for loop.
// Compare each char. If they're not the same, increment i.
// Return count.