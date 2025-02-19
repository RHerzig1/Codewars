// Create a password generator.

function makePassword(phrase) {
  const replaceI = /i/gi;
  const replaceO = /o/gi;
  const replaceS = /s/gi;
  
  const firstLetters = phrase.split(' ').map(elem => elem[0]).join('');
  const password = firstLetters.replaceAll(replaceI, "1").replaceAll(replaceO, "0").replaceAll(replaceS, "5");

  return password;
}

console.log(makePassword("Everything but the kitchen sink"), "Ebtk5");
console.log(makePassword("You can't judge a book by its cover"), "Ycjabb1c");
console.log(makePassword("Go out on a limb"), "G00al");

// phrase: string. 0 <= string.length <= 100. May contain uppercase and lowercase letters, spaces, and numbers.
// Return the string encrypted with the following rules:
//  - Replace "i" and "I" with 1.
//  - Replace "o" and "O" with 0.
//  - Replace "s" and "S" with 5.
//  - Use only the first letter of each word. Remove all spaces.

// https://www.codewars.com/kata/5637b03c6be7e01d99000046
