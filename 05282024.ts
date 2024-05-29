// Write a function that returns the index of the first occurance of a string.

function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", "sad"), 0);
console.log(strStr("leetcode", "hello"), -1)

// haystack: string. 1 <= haystack.length <= 10^4. Consists of only lowercase English characters.
// needle: string. 1 <= needle.length <= 10^4. Consists of only lowercase English characters.
// Return the index of the first occurance of needle in haystack.

// Use the indexOf() method.