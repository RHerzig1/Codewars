// Write a function that converts a string into a string of parenthesis.

function convertToParenthesis(str) {
  const charMap = {};
  str = str.toUpperCase();

  for (const char of str) {
    charMap[char] ? (charMap[char] += 1) : (charMap[char] = 1);
  }

  let result = "";

  for (const char of str) {
    if (charMap[char] > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }

  return result;
}

console.log(convertToParenthesis("din"), "(((");
console.log(convertToParenthesis("ddd"), ")))");
console.log(convertToParenthesis("Success"), ")())())");
console.log(convertToParenthesis("@@12312"), "))))())");

// String with a length > 0. Always a valid string. May contain letters, numbers, and symbols.
// Return a string containing only "(" or ")" for each character. Convert a character to "(" if it appears only once. Else, convert to ")". Ignore casing.

// Convert to upper case.
// Create a count of each character.
// Loop through the object and create a new string based off the count.
// Return the new string.
