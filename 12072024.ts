// Return the max occurrence of any substring within unique characters and length limit.

function maxFreq(str: string, maxLetters: number, minSize: number, maxSize: number): number {
  const substrCounts = new Map<string, number>();
  let maxCount = 0;

  for (let i = 0; i < str.length - minSize + 1; i++) {
    const substrArr: string[] = [];

    for (let j = i; j < str.length; j++) {
      const char = str[j];
      substrArr.push(char);

      // If substr is too short or too long, continue or break
      if (j - i + 1 < minSize) {
        continue;
      } else if (j - i + 1 > minSize) {
        break;
      }

      const substr = substrArr.join("");

      // If substr has too many characters, break
      if (new Set(substr).size > maxLetters) {
        break;
      }

      // Increment the count of substrings and reassign maxCount, if needed
      substrCounts.set(substr, (substrCounts.get(substr) || 0) + 1);
      maxCount = Math.max(maxCount, substrCounts.get(substr)!);
    }
  }

  return maxCount;
}

console.log(maxFreq("aababcaab", 2, 3, 4), 2);
console.log(maxFreq("aaa", 1, 3, 3), 2);
// https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring

// str: string. 1 <= str.length <= 10^5. Lowercase English letters.
// maxLetters: number. 1 <= maxLetters <= 26. Inclusive max count of unique characters in the substring.
// minSize: number. 1 <= minSize <= maxSize. Inclusive min length of substring.
// maxSize: number. minSize <= maxSize <= min(26, str.length). Inclusive max length of substring.
// Return the maximum number of occurrences of any substring.
