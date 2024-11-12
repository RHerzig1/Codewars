// Is string an acronym of words?

function isAcronym(words: string[], str: string): boolean {
  const acronym = words.map((elem) => elem[0]).join("");
  return acronym === str;
}

console.log(isAcronym(["alice", "bob", "charlie"], "abc"), true);
console.log(isAcronym(["an", "apple"], "a"), false);
console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy"), true);
// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/

// words: string[]. 1 <= words.length <= 100. 1 <= words[i].length <= 10. Lowercase English letters.
// str: string. 1 <= s.length <= 100. Lowercase English letters.
// Return true if str is an acronym of words.
