// Write a function that returns the range sum of an array of number pairs.

function sumIntervals(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const results = [];

  for (const interval of intervals) {
    let unique = true;

    for (let i = 0; i < results.length; i++) {
      if (results[i][1] > interval[0]) {
        results[i][1] = Math.max(results[i][1], interval[1]);
        unique = false;
        break;
      }
    }

    if (unique) {
      results.push(interval);
    }
  }

  return results.reduce((a, b) => a + Math.abs(b[0] - b[1]), 0)
}

console.log(
  sumIntervals([
    [1, 5],
    [11, 15],
  ]),
  8
);
console.log(
  sumIntervals([
    [1, 7],
    [2, 8],
  ]),
  7
);
console.log(
  sumIntervals([
    [1, 10],
    [2, 9],
    [-5, 5],
    [5, 15],
  ]),
  20
);

// An array of number pairs. Each pair will be sorted in ascending order.
// Combine overlapping pairs and then return the total sum of the range.

// Declare a results array.
// Iterate through the intervals.
// If start is inside a range, replace the end if it's larger.
// If end is inside a range, replace the start if it's smaller.
// Otherwise, add the iteration to the result.
// Reduce the result. Use math.abs on both nums.
// Return the sum.
