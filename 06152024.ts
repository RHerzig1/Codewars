// Reverse the prefix of a string.

function reversePrefix(word: string, char: string): string {
  const indexOfChar = word.indexOf(char);
  let prefix = word.slice(0, indexOfChar + 1);
  const remainder = word.slice(indexOfChar + 1, word.length);

  prefix = prefix.split("").reverse().join("");

  return prefix + remainder;
}

console.log(reversePrefix("abcdefd", "d"), "dcbaefd");
console.log(reversePrefix("xyxzxe", "z"), "zxyxxe");
console.log(reversePrefix("abcd", "z"), "abcd");
// https://leetcode.com/problems/reverse-prefix-of-word/

// word: string. 1 <= word.length <= 250. Lower case English letters.
// char: string. Single character. Lower case English letter.

// Declare prefix to the prefix.
// Reassign word to the rest of the word.
// Reverse the prefix.
// Combine the prefix with the word and return.
