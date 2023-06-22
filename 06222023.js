// Write a function that uses a key array to calculate a test score.

function checkExam(key, test) {
  let score = 0;

  for (let i = 0; i < key.length; i++) {
    if (!test[i]) {
      continue;
    }
    if (key[i] === test[i]) {
      score += 4;
    } else {
      score -= 1;
    }
  }

  return score >= 0 ? score : 0;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);

// Two arrays containing of the same length. Elements are always lowercase strings containing a, b, c, or d, or may be empty.
// Compare the test with the key. Right answers and worth 4 points, wrong -1,  and blank 0. Return the total score as a number.

// Declare a score variable equal to 0.
// Iterate through the arrays.
// Compare each element and score accordingly.
// Return the score, or 0 if it's negative.
