// Write a function that returns the highest scoring Scrabbles word.

function getBestWord(points: number[], words: string[]): number {
  const scores = words.map((elem) => calculateScore(points, elem));

  let maxScore = 0;
  let index = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      index = i;
    }
  }

  return index;
}

function calculateScore(points: number[], word: string): number {
  let score = 0;

  for (const letter of word) {
    const position = letter.charCodeAt(0) - 'A'.charCodeAt(0);
    score += points[position];
  }

  return score;
}

const points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10, 10];
console.log(getBestWord(points, ["WHO", "IS", "THE", "BEST", "OF", "US"]), 0);
console.log(getBestWord(points, ["NOQ", "TXAY", "S", "OM", "ESFT", "CJUKQ", "QL", "QO", "ASTK", "Y"]), 5);
console.log(getBestWord(points, ["JGPCWVWFW", "JXHNKBJJG"]), 0);

// points: number[]. Number of points per letter. points.length === 26. 1 <= points[i] <= 10.
// words: string[]. Words in uppercase English letters. 1 <= words.length <= 100.
// Return the index of the shortest word with the most points. If multiple words are tied, return the lowest index.

// Loop through the word array and calculate the total points for each word. Save in an array.
// Loop through the point array and find the index of the highest scoring word.
// Return the index.
