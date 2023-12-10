// Write a function that reverses a string using recursion.

function reverseString(str) {
 if (str.length === 0) {
  return str
 }

 return str.at(-1) + reverseString(str.slice(0, str.length - 1))
}

console.log(reverseString('abcd'), 'dcba');
console.log(reverseString('Apple'), 'elppA');
console.log(reverseString(''), '');

// A string containing upper and lowercase characters. No symbols or numbers. May be empty.
// Use recursion to return a reversed string.

// Base case returns the string when a criteria is met.
// Recursive case will modify the string.