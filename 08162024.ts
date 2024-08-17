// Check if a string matches a pattern.

function wordPattern(pattern: string, str: string): boolean {
  const cachePattern: any = {};
  const cacheStr: any = {};
  const patternArr = pattern.split("");
  const strArr = str.split(" ");

  if (patternArr.length !== strArr.length) {
    return false;
  }

  for (let i = 0; i <= strArr.length; i++) {
    const reference = patternArr[i];
    const word = strArr[i];

    if (!Object.hasOwn(cachePattern, reference) && !Object.hasOwn(cacheStr, word)) {
      cachePattern[reference] = word;
      cacheStr[word] = reference;
    } else if (cachePattern[reference] !== word) {
      return false;
    } else if (cacheStr[word] !== reference) {
      return false;
    }
  }

  return true;
}

console.log(wordPattern("abba", "dog cat cat dog"), true);
console.log(wordPattern("abba", "dog cat cat fish"), false);
console.log(wordPattern("aaaa", "dog cat cat dog"), false);
// https://leetcode.com/problems/word-pattern/

// pattern: string. 1 <= pattern.length <= 300. Lower-case English letters only.
// s: string. 1 <= s.length <= 3000. Lower-case English letters and spaces only.

// Convert both parameters into a string.
// Store each word in an object.
