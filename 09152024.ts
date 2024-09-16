// Are two arrays of strings the same?

function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return word1.join("") === word2.join("");
}

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]), true); // "abc" === "abc"
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]), false);
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]), true);
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

// word1: string[]. 1 <= word1.length <= 10^3. 1 <= word1[i].length <= 10^3. All lowercase letters.
// word2: string[]. 1 <= word2.length <= 10^3. 1 <= word2[i].length <= 10^3. All lowercase letters.
// Return true if the joined string from both arrays are the same.
