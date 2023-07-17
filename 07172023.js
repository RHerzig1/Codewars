// Write a function that converts camelCase into kebab-case.

function kebabize(str) {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      arr.push(str[i]);
    } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      if (arr.length > 0) {
        arr.push("-");
      }
      arr.push(str[i].toLowerCase());
    }
  }

  return arr.join("");
}

console.log(kebabize("myCamelCasedString"), "my-camel-cased-string");
console.log(kebabize("myCamelHas3Humps"), "my-camel-has-humps");
console.log(kebabize("CAMEL"), "c-a-m-e-l");

// A string containing words written in valid camelCase.
// Return the text written as kebab-case. The string should only contain lower case letters. No numbers.

// Declare a result variable equal to an empty array.
// Iterate through the parameter.
// If the character is lowercase, push it.
// If the character is uppercase, push a space and the lowercase chacter.
// Join and return.
