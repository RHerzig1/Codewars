// Write an algorithm that uses recursion to create every permutation of a string.

function permutations(str) {
  if (str.length < 2) {
    return [str];
  }

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (str.indexOf(char) != i) {
      continue;
    }

    const remainder = str.replace(char, "");

    for (const permutation of permutations(remainder)) {
      result.push(char + permutation);
    }
  }
  return result;
}

console.log(permutations("a"), ["a"]);
console.log(permutations("ab"), ["ab", "ba"]);
console.log(permutations("abc"), ["abc", "acb", "bac", "bca", "cab", "cba"]);
console.log(permutations("aabb"), [
  "aabb",
  "abab",
  "abba",
  "baab",
  "baba",
  "bbaa",
]);

// A non-empty string containing lower-case English letters.
// Return an array containing every permutation of the given string. Include all characters in each permutation. Remove duplicate strings from the array.
