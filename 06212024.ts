// Reverse every word in a string.

function reverseWords(s: string): string {
  const words = s.split(" ");
  const result = [];

  for (const [...word] of words) {
    let left = 0;
    let right = word.length - 1;
    let temp = "";

    while (left < right) {
      temp = word[left];
      word[left] = word[right];
      word[right] = temp;

      left++;
      right--;
    }

    result.push(word.join(""));
  }

  return result.join(" ");
}

console.log(reverseWords("Let's take LeetCode contest"), "s'teL ekat edoCteeL tsetnoc");
console.log(reverseWords("Mr Ding"), "rM gniD");
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// s: string.
// Return the string with all words reversed.
