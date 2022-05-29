// The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard! e.g. "The score is four nil" should return [4,0]

function scoreboard(string) {
  const numberList = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'nil': 0,
  }
  const wordList = string.split(' ')
  const score = []
  
  for (word of wordList) {
    for (number in numberList) {
      if (word === number) {
        score.push(numberList[number])
      }
    }
  }

  return score
}

// A string containing two integers.
// An array containing two integers.
// "The score is two three"-> [2, 3]
// Create an array bank of number strings.
// Seperate the string in an array of words.
// Iterate through both the number list and word list to search for matches.
// If a match is found, add it to a score variable.
// Return the score array.

// https://www.codewars.com/kata/577ff15ad648a14b780000e7