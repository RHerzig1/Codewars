// Write a function that calculates the battle of the alphabet.

function alphabetWar(str) {
  const points = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    m: -4,
    q: -3,
    d: -2,
    z: -1,
  };

  let score = 0;

  [...str].forEach((elem) => {
    score += points[elem];
  });

  if (score > 0) {
    return "Left side wins!";
  } else if (score < 0) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

console.log(alphabetWar("z"), "Right side wins!");
console.log(alphabetWar("zdqmwpbs"), "Let's fight again!");
console.log(alphabetWar("zzzzs"), "Right side wins!");
console.log(alphabetWar("wwwwww"), "Left side wins!");

// A string containing only lower case letters.
// Calculate the highest score between 'wpbs' and 'mqdz'. Return a string announcing the winner.

// Create a cache to score the points for each letter. Use positive and negative numbers.
// Iterate throught the string and calculate the points.
// Return a string announcing the winner.