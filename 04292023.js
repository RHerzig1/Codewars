// Write a function that reverses words in a string while retaining the original order.

function reverseWords(str) {
  const arr = str.split(" ");
  return arr.map((elem) => elem.split("").reverse().join("")).join(" ");
}

console.log(reverseWords("Hello world!"), "olleH !dlrow");
console.log(reverseWords("Hello  world!"), "olleH  !dlrow");
console.log(reverseWords(""), "");

// A string of words seperated by at least one space.
// Return the string with the words in place, but the letters of each word reversed.

// Split the string into an array of words.
// Iterate through the arr.
// For each word, reverse the letters.
// Join the array and return.
