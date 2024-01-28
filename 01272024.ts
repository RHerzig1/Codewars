// Write an algorithm that removes duplicates from a sorted array, in place.

export function sortArr(arr: (number)[]): (number)[] {
  let i: number = 1;
  let j: number = 1;

  while (i < arr.length) {
    if (arr[i] !== arr[i - 1]) {
      arr[j] = arr[i];
      j++;
    }
    i++;
  }

  return arr;
}

console.log(sortArr([0, 1, 1, 2]), [0, 1, 2, "_"]);
console.log(sortArr([0, 1, 1, 2, 3, 4]), [0, 1, 2, 3, 4, "_"]);
console.log(sortArr([0, 1, 1, 2, 2, 2, 3, 4]), [0, 1, 2, 3, 4, "_", "_", "_"]);

// arr: number[]. 3 <= arr.length <= 30. 0 <= number <= 100. Number is always an integer. Always valid array and number.
// Return an array: number[] containing with the duplicates removed. The array length will be the same, just move those duplicate elements to the end.

// Use a two pointer technique.
// When the values don't match, replace the lower pointer with the value of the higher pointer.
// The replace the higher pointer with "_".
// Return the final result.
