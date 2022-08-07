// Value of contiguous consonant substrings
// In the provided string, calculate the alphabetical value of each consonant substring.

function solve(s) {
  const vowels = [...'aeiou']
  let highScore = 0
  let score = 0
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      if (score > highScore) highScore = score
      score = 0
    }
    else {
      score += s.charCodeAt(i) - 96
    }
  }
  return score > highScore ? score : highScore
};

// The parameter is a string containing only lowercase letters. No spaces or numbers.
// Return an integer that represents the largest possible sum of values from contiguous consonants.
// Declare a score variable equal to 0.
// Declare a highScore variable equal to 0.
// Declare a vowel array equal to ['a', 'e', 'i', 'o', 'u']
// Iterate through the string.
// If the letter is a consonant, add its value to the score.
// If the letter is a vowel, compare score to highScore. If score is a bigger number, use it to replace highScore's value and reset score to 0.
// After iterating, return highScore.