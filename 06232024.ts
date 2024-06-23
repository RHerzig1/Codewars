// Count the number of characters to append to make a subsequence.

function appendCharacters(s: string, t: string): number {
  let a = 0;
  let b = 0;

  // Iterate S and increment B every time both S and T share a character.
  while (a < s.length && b < t.length) {
      if (s[a] === t[b]) {
          b++;
      }

      a++;
  }

  // Calculate the number of characters remaining in T.
  const difference = t.length - b;

  return difference;
};

console.log(appendCharacters("coaching", "coding"), 4); // "coachingding"
console.log(appendCharacters("abcde", "a"), 0); // "abcde"
console.log(appendCharacters("z", "abcde"), 5); // "zabcde"
// https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/

// s: string. 1 <= s.length <= 10^5. Lower case English characters.
// t: string. 1 <= s.length <= 10^5. Lower case English characters.
// Return the number of characters that have to be appended to s in order to make t a subsequence of s. In a subseqent, characters don't have to be contiguous, but must be in order.

// Use the two pointer technique to find all the matching characters.
// Return the count of remaining characters from t.