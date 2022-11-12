// Calculate the election winner

function getWinner(listOfBallots) {
  const results = {}
  const half = listOfBallots.length / 2
  listOfBallots.forEach(ballot => ++results[ballot] || (results[ballot] = 1))
  const winner = Object.keys(results).filter(candidate => results[candidate] > half)
  return winner[0] || null
}

// An array of ballots. Each vote is represented by a string of who the vote is for. All valid inputs.
// Return the name of the winner. If the winner does not have more than half the votes, return null.

// Create a results object.
// Iterate through the ballots and count the scores.
// Return the candidate with over half the votes, or null.