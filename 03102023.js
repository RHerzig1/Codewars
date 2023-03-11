// Write an algorithm that encrypts a string by increasing each character's char code.

function encrypt(text, rule) {
  const result = [];

  for (const char of text) {
    const code = char.charCodeAt(0);
    result.push(String.fromCharCode((code + rule) % 256));
  }

  return result.join("");
}

console.log(validClosures("(){}[]"), true);
console.log(validClosures("([{}])"), true);
console.log(validClosures(")(}{]["), false);

// A string of valid characters. Uppercase, lowercase, numbers, and punctuation. String may be empty.
// Encrypt the string by increasing the char code using the rule and return the encrypted string.

// Declare a result array.
// Iterate through the text. For each character, increase the char code and push the new character to the array.
// Join the array and return.
