// Write a function that duplicates each character of a string.

export function doubleChar(str: string): string {
  let result: Array<string> = [];

  for (const char of str) {
    result.push(char, char);
  }

  return result.join("");
}

console.log(doubleChar("HelloWorld"), "HHeellllooWWoorrlldd");

// A string of uppercase and lowercase characters. No numbers or symbols. 0 < string.length <= 100. Always a valid string.
// Return the string with each letter duplicated.
