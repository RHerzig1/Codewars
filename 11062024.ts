// Count differences in bit.

function minBitFlips(start: number, goal: number): number {
  let goalBits = goal.toString(2);
  const startBits = start.toString(2).padStart(goalBits.length, "0");
  goalBits = goalBits.padStart(startBits.length, "0");
  let difference = 0;

  for (let i = 0; i < goalBits.length; i++) {
    const goalBit = goalBits[i];
    const startBit = startBits[i];

    if (goalBit !== startBit) {
      difference++;
    }
  }

  return difference;
}

console.log(minBitFlips(10, 7), 3);
console.log(minBitFlips(3, 4), 3);
// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

// start: number. 0 <= start <= 10^9.
// goal: number. 0 <= goal <= 10^9.
// Return the number of bits that must be flipped in order to make both values equal.
