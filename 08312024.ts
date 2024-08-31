// Return indices containing the given character.

function findWordsContaining(words: string[], x: string): number[] {
  const indices: number[] = [];

  words.forEach((word, index) => {
    if (word.search(x) > -1) {
      indices.push(index);
    }
  });

  return indices;
}

console.log(findWordsContaining(["leet", "code"], "e"), [0, 1]);
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"), [0, 2]);
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"), []);
// https://leetcode.com/problems/find-words-containing-character/

// words: string[]. 1 <= words.length <= 50. 1 <= words[i].length <= 50. words[i] consists only of lowercase English letters.
// x: string. Lowercase English letter.
// Return an array of incices that contain the character x.
