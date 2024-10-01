// Determine the output of a faulty keyboard.

function finalString(s: string): string {
  let result: string[] = [];

  for (const char of s) {
    if (char === "i") {
      result.reverse();
    } else {
      result.push(char);
    }
  }

  return result.join("");
}

console.log(finalString("string"), "rtsng");
// ["s"]
// ["s", "t"]
// ["s", "t", "r"]
// ["r", "t", "s"] letter is "i" so reverse the string so far.
// ["r", "t", "s", "n"]
// ["r", "t", "s", "n", "g"]
console.log(finalString("poiinter"), "ponter");
// ["p"]
// ["p", "o"]
// ["o", "p"] letter is "i" so reverse the string so far.
// ["p", "o"] letter is "i" so reverse the string so far.
// ["p", "o", "n"]
// ["p", "o", "n", "t"]
// ["p", "o", "n", "t", "e"]
// ["p", "o", "n", "t", "e", "r"]
// https://leetcode.com/problems/faulty-keyboard/

// s: string. 1 <= s.length <= 100. Consists of lowercase English letters only.
// Return the string after applying some operations.
// When the 'i' key is typed, reverse the string. Otherwise, type all characters as expected.
