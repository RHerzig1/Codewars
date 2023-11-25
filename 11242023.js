// Write a function that switches 'a' and 'b' characters in a string.

function switcheroo(str) {
  const result = [];

  for (const char of str) {
    if (char === "a") {
      result.push("b");
    } else if (char === "b") {
      result.push("a");
    } else {
      result.push(char);
    }
  }

  return result.join("");
}

console.log(switcheroo("bring"), "aring");
console.log(switcheroo("bad"), "abd");
console.log(switcheroo("fly"), "fly");

// A string containing only lower case characters. Length > 0. Always valid.
// Return a string with 'a' and 'b' characters swapped. Return the other characters as they're provided.

// Declare a result array.
// Iterate through the string. Push each character, swapping 'a' and 'b' as needed.
// Join and return the result.
