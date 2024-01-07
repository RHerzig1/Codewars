// Write a function that sorts and concatenates an arrray of arrays.

export function cantBeatSoJoin(numbers: number[][]): number[] {
  const cache = new Map();

  for (const elem of numbers) {
    const sum = elem.reduce((a, c) => a + c, 0);
    cache.set(elem, sum);
  }

  numbers = numbers.sort((a, b) => cache.get(b) - cache.get(a));
  return numbers.flat();
}

console.log(cantBeatSoJoin([[1, 0, 1, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0, 1], [0], []]), [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]);
console.log(cantBeatSoJoin([[5, 1], [9, 14], [17, 23], [4, 1], [0, 1]]), [17, 23, 9, 14, 5, 1, 4, 1, 0, 1])
console.log(cantBeatSoJoin([[], [], [], []]), [])
console.log(cantBeatSoJoin([[], [], [0], []]), [0])

// An array of arrays. The parent array only contains arrays. The child arrays contain at least 1 number each. Always valid.
// Return the sorted and concatenated array. Sort in decending order of each child array's reduced sum.

// Create a new Map to cache the sums of each array. Use the array as the key.
// Iterate through the array to assign key/values to the map.
// Sort the array.
// Flatten the array.