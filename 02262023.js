// Write an algorithm that returns whether string s is a subsequence of string t.

function isSubsequence(s, t) {
  let ps = 0;
  let pt = 0;

  while (pt < t.length) {
    if (t[pt] === s[ps]) {
      ps++;
    }
    pt++;
  }

  return ps === s.length;
}

console.log(isSubsequence("abc", "ahbgdc"), true);
console.log(isSubsequence("axc", "ahbgdc"), false);

// Two strings containing lowercase letters.
// Return a boolean indicating whether all characters of the first string are present, in order, inside the second string.

// Declare pointers for strings s and t.
// While the pointer for t is less than t.length, iterate.
// If the characters are the same, increment ps.
// Iterate pt.
// In the end, if ps equals s.length then each character is present.