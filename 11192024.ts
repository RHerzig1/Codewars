// Matching vowel count in both halves of string.

function halvesAreAlike(str: string): boolean {
  const a = str.slice(0, str.length / 2);
  const b = str.slice(str.length / 2);

  const vowelsA = a.match(/[aeiouAEIOU]/gi) || [];
  const vowelsB = b.match(/[aeiouAEIOU]/gi) || [];

  return vowelsA.length === vowelsB.length;
}

console.log(halvesAreAlike("book"), true);
console.log(halvesAreAlike("textbook"), false);
console.log(halvesAreAlike("bookkeep"), true);

// str: string. 2 <= s.length <= 1000. s.length is even. Uppercase and lowercase letters.
// Return true if both halves of str contain the same count of vowels.
