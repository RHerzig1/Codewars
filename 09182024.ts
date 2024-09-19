// Shortest word for license plate.

function shortestCompletingWord(licensePlate: string, words: string[]): string {
  // Count characters in licensePlate.
  const charMapLP = new Map<string, number>();

  for (let char of licensePlate) {
    char = char.toLowerCase();

    if (char >= "a" && char <= "z") {
      charMapLP.set(char, (charMapLP.get(char) || 0) + 1);
    }
  }

  // Iterate words.
  let result: null | string = null;

  for (const word of words) {
    const charMapWord = new Map<string, number>();
    let isValid = true;

    // Count characters in word.
    for (const char of word) {
      charMapWord.set(char, (charMapWord.get(char) || 0) + 1);
    }

    // Verify whether all characters from licensePlate appear in word.
    for (const [charLP, countLP] of charMapLP) {
      const countWord = charMapWord.get(charLP) || 0;

      if (countWord < countLP) {
        isValid = false;
        break;
      }
    }

    result = isValid && (result === null || word.length < result.length) ? word : result;
  }

  return result;
}

console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]), "steps");
// "steps" is the shorest word in words that uses all the letters from licensePlate ("s", "p", "s", "t").
console.log(shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]), "pest");
// "pest" appears before the other valid words.
// https://leetcode.com/problems/shortest-completing-word/

// licensePlate: string. 1 <= licensePlate.length <= 7. Contains digits, uppercase and lower case letters, and spaces.
// words: string[]. 1 <= words.length <= 1000. 1 <= words[i].length <= 15. Words[i] contains lowercase letters.
// Return the shortest word from words that includes all the letters from licensePlate. Ignore casing, numbers, and spaces.
