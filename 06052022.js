// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

function bingo(a) {
  const numberCheck = [2, 9, 14, 7, 15]
  let result = 'WIN'

  for (let element of numberCheck) {
    if (!a.includes(element)) {
      result = 'LOSE'
    }
  }
  return result
}

// An array of 10 integers, randomly between 1 and 26.
// Return string "WIN" if the parameter includes 2, 9, 14, 7, and 15 in any order.
// Create an array containing those numbers, to be referenced.
// Iterate through the parameter string. For each element, iterate through the numberCheck and search for a match.
// If true, continue with the next element. If all true, return "WIN"
// If a check fails, return "LOSE" 

// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145