// Write a function that proves whether a given number is a perfect power.

function isPP(num) {
  const power = [2, 2];
  const calc = (arr) => arr.reduce((a, c) => a ** c);

  while (calc(power) <= num) {
    while (calc(power) <= num) {
      if (calc(power) === num) {
        return power;
      }
      power[1]++;
    }
    power[1] = 2;
    power[0]++;
  }

  return null;
}

console.log(isPP(4), [2, 2]);
console.log(isPP(9), [3, 2]);
console.log(isPP(100000000), [10, 8]);
console.log(isPP(5), null);

// An integer >= 0. Number may be extremely large.
// Return a string indicating whether or not the parameter is a perfect number.

//
