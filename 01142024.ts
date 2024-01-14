// Write a function that returns the minimum absolute difference of elements of an array of numbers.

export function gettingMad(arr: number[]): number {
  const duplicate: Boolean = arr.some((elem) => arr.indexOf(elem) !== arr.lastIndexOf(elem));

  if (duplicate) {
    return 0;
  }

  arr = arr.sort((a, b) => b - a);
  let minimum: number = arr[0] - arr[1];

  for (let i = 1; i <= arr.length - 2; i++) {
    const difference: number = arr[i] - arr[i + 1];
    minimum = Math.min(minimum, difference);
  }

  return minimum;
}

console.log(gettingMad([-10, 0, -3, 1]), 1);
console.log(gettingMad([0, 0, 0, 0]), 0);
console.log(gettingMad([-570, 542]), 1112);
console.log(gettingMad([-69, -808, 828, 57]), 126);

// An array of numbers. 2 <= array.length <= 100. Always valid integers. Positive or negative, or 0.
// Return the minimum absolute difference (MAD). This difference should always be returned as a positive number. If the same value appears more than once, the MAD will be 0.

// Iterate the array. If a number appears more than once, return 0.
// Sort the array.
// Iterate the sorted array and cache the minimum absolute difference.
// Return the result.
