// Create a simulation of playing the Powerball lottery.

function powerBallLottery(num) {
  const odds = 292200000
  const guess = num || (Math.floor(Math.random() * odds))
  const winner = Math.floor(Math.random() * odds)
  if (guess === winner) {
    return 'You won $1 billion!!!'
  }
  else return 'Sorry, try again'
}

console.log(powerBallLottery())

// The parameter is a whole number.
// Compare the whole number against a random number between 0 and 292200000. If they match, return "You won". If they don't match, return "You lost".