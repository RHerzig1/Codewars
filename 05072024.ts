// Write a function that returns the minimum absolute difference from an array.

function gettingMad(arr: number[]): number {
  arr = arr.sort((a, b) => a - b);
  let minimum = Math.abs(arr[0] - arr[1]);

  for (let i = 1; i <= arr.length - 2; i++) {
    const difference = Math.abs(arr[i] - arr[i + 1]);
    minimum = Math.min(minimum, difference);
  }

  return minimum;
}

console.log(gettingMad([-10, 0, -3, 1]), 1);
console.log(gettingMad([0, 0, 0, 0]), 0);
console.log(gettingMad([-570, 542]), 1112);

// array: number[]. In any order. 2 <= array.length <= 100. -1000 <= array[i] <= 1000.
// Return the minimum absolute difference from the array.
