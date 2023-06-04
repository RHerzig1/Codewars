// Write a function that converts a string to uppercase or lowercase, whichever requires fewer character changes.

function changeCase(str) {
  const cache = {
    lowercase: 0,
    uppercase: 0,
  };

  for (const char of str) {
    if (char >= "a" && char <= "z") {
      cache.lowercase++;
    }
    if (char >= "A" && char <= "Z") {
      cache.uppercase++;
    }
  }

  return cache.lowercase >= cache.uppercase
    ? str.toLowerCase()
    : str.toUpperCase();
}

console.log(changeCase("Hello"), "hello");
console.log(changeCase("hELLO"), "HELLO");
console.log(changeCase(""), "");

// A string containing uppercase or lowercase letters.
// Return the string fully uppercase or lowercase, whichever requires fewer character changes. If it is an equal number, change to lowercase.

// Declare a cache to count lowercase and uppercase characters.
// Iterate through the string and count the cases.
// Modify the string accordingly and return.