// Write a function that returns true if a string is an anagram of another.

function isAnagram(s: string, t: string): boolean {
  const charMap: { [index: string]: number } = {};

  for (const char of s) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (const char of t) {
    charMap[char] = charMap[char] - 1 ?? -1;
  }

  for (const prop in charMap) {
    if (charMap[prop] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "gramana"), true);
console.log(isAnagram("car", "rat"), true);

// s, t: string. 1 <= s.length, t.length <= 5 * 104. Both consist of only lowercase letters.
// Return true or false whether the strings are anagrams.

// Declare a cache to count each character.
// Subtract each character from string 2.
// If any property has a value other than 0, retun false.
// Else, return true.
