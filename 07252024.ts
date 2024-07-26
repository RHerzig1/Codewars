// Return whether the number is a perfect square, without the Math object.

function isPerfectSquare(num: number): boolean {
  let left = 0;
  let right = num;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const squared = middle * middle;

    if (squared < num) {
      left = middle + 1;
    } else if (squared > num) {
      right = middle - 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(isPerfectSquare(16), true);
console.log(isPerfectSquare(14), false);
console.log(isPerfectSquare(1), true);
console.log(isPerfectSquare(100000001), false);

// num: number. 1 <= num <= 2^31 - 1.
// Return whether or not num is a perfect square. Num may be very large, so use a binary search algorithm.
