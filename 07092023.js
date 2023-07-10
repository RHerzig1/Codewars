// Write a function that calculates a solution to the "twice linear" challenge, using two pointers.

function dblLinear(num) {
  const calcX = (u) => 2 * u + 1;
  const calcY = (u) => 3 * u + 1;

  let result = [1];
  let indexX = 0;
  let indexY = 0;

  for (let i = 1; i <= num; i++) {
    const x = calcX(result[indexX]);
    const y = calcY(result[indexY]);

    if (x < y) {
      result.push(x);
      indexX++;
    } else if (x > y) {
      result.push(y);
      indexY++;
    } else {
      result.push(x);
      indexX++;
      indexY++;
    }
  }

  return result[num];
}

console.log(dblLinear(10), 22);
console.log(dblLinear(20), 57);
console.log(dblLinear(30), 91);
console.log(dblLinear(50), 175);
console.log(dblLinear(100), 447);

// An integer > 0. Always a valid number.
// Return the nth number of the array following these calculations:
// The array always starts at u = 1.
// Calculate x = (u * 2) + 1.
// Calculate y = (u * 3) + 1.
// Push whichever is smaller.
// Continue pushing both x and y for each number of the array, in ascending order.
// If x and y are not unique numbers, only add it to the array once but increment both counters.

// To answer in O(n) time complixity, avoiding sorting. Instead, create two points for the x and y indexes, starting at 0. Whenever a value is pushed to the array, increment that index.