// Count the consistent strings.

function countConsistentStrings(allowed: string, words: string[]): number {
  let count: number = 0;

  const allowedSet = new Set([...allowed]);

  for (const word of words) {
    let consistent = true;

    for (const char of word) {
      if (!allowedSet.has(char)) {
        consistent = false;
        break;
      }
    }

    if (consistent) {
      count++;
    }
  }

  return count;
}

// console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]), 2);
// console.log(countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]), 7);
// console.log(countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]), 4);
// https://leetcode.com/problems/count-the-number-of-consistent-strings/

// allowed: string. 1 <= allowed.length <= 26. Lowercase English letters only. Always distinct characters.
// words: striing[]. 1 <= words.length <= 10^4. 1 <= words[i].length <= 10.  Lowercase English letters only.
// Return a count of words that contain only the characters within allowed.
