// Return the most common character.

function mostCommonCharacter(str: string): string {
  str = str.toLowerCase();
  const charMap = new Map<string, number>();

  for (const char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  let result: string = "";
  let count: number = 0;

  for (const [char, charCount] of charMap) {
    if (count < charCount) {
      result = char;
      count = charCount;
    }
  }

  return result;
}

console.log(mostCommonCharacter("Hello World!"), "l");
console.log(mostCommonCharacter("abbcd"), "b");
console.log(mostCommonCharacter("Hello!!!!"), "!");
// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// str: string. 1 <= str.length <= 100. Consists of uppercase and lowercase English letters and symbols.
// Return the most common character. Ignore casing.
