// Write a function that converts CamelCase into snake_case.

function toCamelCase(str) {
  if (typeof str === "number") {
    return String(str);
  }

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= "A" && char <= "Z" && i === 0) {
      result.push(char.toLowerCase());
    } else if (char >= "A" && char <= "Z") {
      result.push("_", char.toLowerCase());
    } else {
      result.push(char);
    }
  }

  return result.join("");
}

console.log(toCamelCase("HelloWorld"), "hello_world");
console.log(toCamelCase(5), "5");

// A string. Will always be valid CamelCase.
// Return a string written in snake_case. If a number is passed through, return the number as a string.

// If the parameter is a number, return a string.
// Declare a results array.
// Iterate through the string.
// If the character is uppercase, push '_' and the char.
// Else push the char.
// Join and return.
