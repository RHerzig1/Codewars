// Convert a string to parenthesis.

function duplicateEncode(word: string) {
  // Convert string to lowercase.
  word = word.toLowerCase();

  // Cache each character and an appearance count.
  const charCount = new Map<string, number>();

  for (const char of word) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Iterate the string and add the correct parenthesis to a new string.
  let result = "";

  for (const char of word) {
    if (charCount.get(char)! > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }

  return result;
}

console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"), "))((");

// word: string. 1 <= word.length <= 100. Consists of uppercase and lowercase English characters, symbols, spaces, and numbers.
// Convert the string to parenthesis. Ignore differences in uppercase/lowercase letteres.
//   "(" when the character only appears in the string once.
//   ")" when the character appears in the string multiple times.
