// Write a function that calculates the winner of good vs evil.

function goodVsEvil(good, evil) {
  const results = {
    good: "Battle Result: Good triumphs over Evil",
    evil: "Battle Result: Evil eradicates all trace of Good",
    tie: "Battle Result: No victor on this battle field",
  };
  
  const goodWorth = [1, 2, 3, 3, 4, 10];
  const evilWorth = [1, 2, 2, 2, 3, 5, 10];
  const counts = [];
  const goodArr = good.split(' ').map((elem, index) => Number(elem) * goodWorth[index]);
  counts.push(goodArr.reduce((a, c) => a + c));
  const evilArr = evil.split(' ').map((elem, index) => Number(elem) * evilWorth[index]);
  counts.push(evilArr.reduce((a, c) => a + c));
  const result = counts[0] - counts[1];
  
  if (result === 0) {
    return results.tie;
  }

  return result > 0 ? results.good : results.evil;
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good');
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil');
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field');

// Two strings, each containing integers separated by a space. The integers represent the number of fighters for each catagory, per side.
// Use the worth chart to assign values to each group of fighters, and then calculate which side has the higher worth.

// Calculate the total worth for each team.
// Subtract the values to see which is bigger.
// Return the winner or tie strings.