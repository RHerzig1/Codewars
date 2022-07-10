// Return the highest scoring word in array
// Convert each letter of the word into its numerical alphabetical position. Return the highest scoring word. If it's a tie, return the word with the lowest index.

function high(string){
  const wordList = string.split(' ')

  const getScore = word => {
    return word.split('').reduce((prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96, 0)
  }
  
  const scoreList = wordList.map(word => getScore(word))
  
  const findHighScore = scoreList => {
    let highestIndex = 0
    let highestScore = 0

    scoreList.forEach((score, i) => {
      if (score > highestScore) {
        highestIndex = i;
        highestScore = score;
      }
    })
    return wordList[highestIndex]
  }
  
  return findHighScore(scoreList)
}

// The parameter is an array of strings.
// Return the element with the highest score.
// Declare a highscore variable equal to 0.
// Declare a highscoreIndex variable equal to 0.
// Iterate through the array.
// Split each element, iterate through to convert each number to a charCode.
// Reduce the charCodes to calculate the word score.
// If the score is high than the highscore, reassign the values for highscore and highscoreIndex.
// Return x[highscoreIndex]