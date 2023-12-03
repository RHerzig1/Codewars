// Write a function that calculates the average values from an object and returns the appropriate string.

function outed(meet, boss) {
  const ratings = [meet[boss], ...Object.values(meet)];
  return ratings.reduce((a, c) => a + c, 0) / (ratings.length - 1) <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}

console.log(outed({ tim: 0, jim: 2, randy: 0, sandy: 7, andy: 0, katie: 5, laura: 1, saajid: 2, alex: 3, john: 2, mr: 0 }, "laura"), "Get Out Now!");
console.log(outed({ tim: 1, jim: 3, randy: 9, sandy: 6, andy: 7, katie: 6, laura: 9, saajid: 9, alex: 9, john: 9, mr: 8 }, "katie"), "Nice Work Champ!");
console.log(outed({ tim: 2, jim: 4, randy: 0, sandy: 5, andy: 8, katie: 6, laura: 2, saajid: 2, alex: 3, john: 2, mr: 8 }, "john"), "Get Out Now!");

// An object containing names of people in the office and their happiness rating. The name of the boss, who's rating counts x2. Always valid inputs.
// Return the 'Get Out Now!' if the average is <= 5, else 'Nice Work Champ!';

// Create an array of the scores, including the boss's score twice.
// Reduce to calculate the sum and divide by the length - 1.
// Return a string.
