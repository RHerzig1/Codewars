// Count words that begin with prefix.

function prefixCount(words: string[], pref: string): number {
  let count = 0;

  for (const word of words) {
    if (word.startsWith(pref)) {
      count++;
    }
  }

  return count;
}

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"), 2);
console.log(prefixCount(["leetcode", "win", "loops", "success"], "code"), 0);
// https://leetcode.com/problems/counting-words-with-a-given-prefix/

// words: string[]. 1 <= words.length 100. 1 <= words[i].length <= 100. Lowercase letters.
// pref: string. 1 <= pref.length <= 100.
// Return a count of words that begin with pref.
