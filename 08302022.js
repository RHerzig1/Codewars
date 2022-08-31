// Create template literal for winning team

function uefaEuro2016(teams, scores){
  if (scores[0] === scores[1]) return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  let winner = scores[0] > scores[1] ? teams[0] : teams[1]
  return `At match ${teams[0]} - ${teams[1]}, ${winner} won!`
}

// The parameters are teams, an array with two elements, and scores, an array with two integers.
// Return a string announcing the winner team or draw.
// Using a conditional, if the scores are equal then return the draw template literal.
// Assign a team to winner using a ternary operator.
// Using the winner variable, create and return a template literal for the winning team.