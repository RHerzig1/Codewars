// Write a function that returns the longest nice substring.

function longestNiceSubstring(s: string): string {
  const sMap = new Map<string, boolean>();
  let longestSubString = "";

  // Cache each character of s.
  for (const char of s) {
    sMap.set(char, true);
  }

  // Brute force every substring by adding each character one at a time.
  for (let i = 0; i < s.length; i++) {
    let j = 0;
    let subString = "";

    while (i + j < s.length) {
      // Check the cache to ensure the character has a nice counterpart.
      if (!sMap.has(s[i + j].toLowerCase()) || !sMap.has(s[i + j].toUpperCase())) {
        break;
      }

      // Add the character to the substring.
      subString = subString + s[i + j];

      // Iterate throught the substring to confirm it's nice.
      let isNice = true;

      for (const char of subString) {
        if (!subString.includes(char.toLowerCase()) || !subString.includes(char.toUpperCase())) {
          isNice = false;
        }
      }

      // Reassign longestSubString to subString, if the latter is longer.
      if (isNice) {
        longestSubString = longestSubString.length >= subString.length ? longestSubString : subString;
      }

      j++;
    }
  }

  return longestSubString;
}

console.log(longestNiceSubstring("YazaAay"), "aAa");
console.log(longestNiceSubstring("Bb"), "Bb");
console.log(longestNiceSubstring("c"), "");
console.log(longestNiceSubstring("HkhBubUYy"), "BubUYy");

// s: string. Uppercase and lowercase English characters. 1 <= s.length <= 100.
// Return the longest nice substring. A substring is nice if every letter has uppercase and lowercase variants within the substring.