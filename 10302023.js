// Write a function that calculates whether a building of a given age is strong enough to survive the provided earthquake.

function strongEnough(earthquake, age) {
  earthquake = earthquake.map(elem => elem.reduce((a, c) => a + c, 0));
  const magnitude = earthquake.reduce((a, c) => a * c, 1);
  
  const strength = 1000 * Math.pow(.99, age);
  
  return strength >= magnitude ? "Safe!" : "Needs Reinforcement!";

}

console.log(strongEnough([[2,3,1],[3,1,1],[1,1,2]], 2), "Safe!");
console.log(strongEnough([[5,8,7],[3,3,1],[4,1,2]], 2), "Safe!");
console.log(strongEnough([[5,8,7],[3,3,1],[4,1,2]], 3), "Needs Reinforcement!")

// Earthquake is represented by an array of arrays. The inner array represents a shockwave with each element, a positive number, being a tremor. Always a positive, valid integer. Never empty.
// Age represents the number of years. Each year is a 1% exponential decay. Parameter is always a valid number >= 0.
// Return "Safe!" or "Needs Reinforcement!" depending on whether the building survives the earthquake.

// Add up each inner array and multiply the sums.
// Calculate decay using y=a(1-b)x, wherein y is the final amount, a is the original amount, b is the decay factor, and x is the amount of time.
// Compare the values. If the magnitude of the earthquake is stronger than the strength of the building, then it fails.
