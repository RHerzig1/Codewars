// Return the number of laps two runners of different tracks will have to make to run an equal distance (gcd and lcm).

function numLaps(x, y) {
  const gcd = calcGCD(x, y);
  const lcm = (x * y) / gcd;
  return [lcm / x, lcm / y];
}

function calcGCD(x, y) {
  let r = null;
  while (x % y > 0) {
    r = x % y;
    x = y;
    y = r;
  }
  return y;
}

console.log(numLaps(2, 8), 4, 1);
console.log(numLaps(3, 7), 7, 3);
console.log(numLaps(4, 6), 3, 2);

// Two integers > 1 representing the distance of each track.
// Calculate the minimum number of laps each runner will have to make in order to have an equal distance.

// Calculate the least common mulitple.
// Divide the lcm by the actual lap length.