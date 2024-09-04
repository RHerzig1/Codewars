// Build the highest value pyramid.

function pyramid(stones) {
  // Cache the counts of each value.
  const cache = new Map();

  for (const stone of stones) {
    cache.set(stone, (cache.get(stone) || 0) + 1);
  }

  // Convert the cache into an array of value/count pairs, sort by value.
  const stonesArr = Array.from(cache).sort((a, b) => b[0] - a[0]);

  let third = null;
  let second = null;
  let first = null;
  let allLayersBuilt = false;

  // Starting with the highest value, populate each layer.
  for (const [value, count] of stonesArr) {
    if (count >= 3 && third === null) {
      third = value * 3;
    } else if (count >= 2 && second === null) {
      second = value * 2;
    } else if (count >= 1 && first === null) {
      first = value;
    }

    // Break loop if all layers have a value.
    if (third !== null && second !== null && first !== null) {
      allLayersBuilt = true;
      break;
    }
  }

  // Return the total value, or null if the pyramid is incomplete.
  return allLayersBuilt ? third + second + first : null;
}

console.log(pyramid([1, 1, 1, 2, 2, 2, 3, 3, 3]), 14);
console.log(pyramid([-1, -1, 0, 0, 1, 1]), null);
console.log(pyramid([]), null);
console.log(pyramid([-10, -10, -6, 6, -6, 4, -6, 4, 2, 0, 10, -10, -10]), 0);

// stones: number[]. 0 <= stones.length <= 100. -100 <= stones[i] <= 100. stones[i] represents the stone's value. Unsorted.
// Return the maximum value pyramid possible. The pyramind must have 3 layers. Each layer must have the same value stones.
//    [z]
//  [y] [y]
// [x][x][x]
