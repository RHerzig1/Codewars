// Sort vowels and leave consonants in place.

function sortVowels(str: string): string {
  // Declare reference list of all vowels.
  const vowels = new Set<string>("aeiouAEIOU");

  // Create a stack using reversed list of all vowels from str.
  const stack = Array.from(str)
    .filter((elem) => vowels.has(elem))
    .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));

  // Create a new array using consonants from str in place, or vowels from the sorted stack.
  const result = Array.from(str, (char) => {
    if (vowels.has(char)) {
      return stack.pop()!;
    } else {
      return char;
    }
  });

  return result.join("");
}

console.log(sortVowels("leetcode"), "leetcedo");
console.log(sortVowels("lEetcOde"), "lEOtcede"); // Include capitalized characters.
console.log(sortVowels("lYmpH"), "lYmpH"); // No vowels, no changes to string.

// s: string. 1 <= s.length <= 10^5. s consists of uppercase and lowercase English letters.
// Return a new string after sorting the vowels while leaving the consonants in place.
//   Sort vowels in nondecreasing order using their ASCII values.
