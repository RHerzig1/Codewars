// Is n a power of three?

function isPowerOfThree(n: number): boolean {
  if (n < 1) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  let power = 3;
  let i = 1;

  while (power <= n) {
    if (power === n) {
      return true;
    }

    power = Math.pow(3, i++);
  }

  return false;
}

console.log(isPowerOfThree(27), true);
console.log(isPowerOfThree(0), false);
console.log(isPowerOfThree(-1), false);
console.log(isPowerOfThree(-27), false);
console.log(isPowerOfThree(-9), false);
console.log(isPowerOfThree(-3), false);
// https://leetcode.com/problems/power-of-three/

// n: number. -2^31 <= n <= 2^31 - 1.
// Return true if n is a power of three.
