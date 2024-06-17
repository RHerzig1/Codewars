// Calculate the total score of a string.

function scoreOfString(s: string): number {
  const values = s.split("").map((char) => char.charCodeAt(0));
  let totalScore = 0;

  for (let i = 0; i < values.length; i++) {
    if (s[i + 1]) {
      totalScore += Math.abs(values[i] - values[i + 1]);
    }
  }

  return totalScore;
}

// console.log(scoreOfString(hello), 13); // 3 + 7 + 0 + 3
// console.log(scoreOfString(zaz), 50); // 25 + 25

// s: string. 2 <= s.length <= 100. s consists of only lowercase English characters.
// Return the total score of the string. Calculate the score by adding the absolute difference of ASCII values between adjacent characters.

// Convert string into an array of ASCII values.
// Reduce the values and return.
