// Write a function that caches the peaks of an array of integers.

function pickPeaks(arr) {
  const result = {
    pos: [],
    peaks: [],
  };

  let prev = [0, arr[0]];
  let next = [2, arr[2]];

  for (let i = 1; i < arr.length - 1; i++) {
    prev = [i - 1, arr[i - 1]];
    next = [i + 1, arr[i + 1]];

    if (prev[1] >= arr[i]) {
      continue;
    }

    if (next[1] > arr[i]) {
      continue;
    }

    if (next[1] === arr[i]) {
      const rest = arr.slice(i);
      let valid = false;

      for (const elem of rest) {
        if (elem > arr[i]) {
          break;
        }
        if (elem < arr[i]) {
          valid = true;
        }
      }
      if (valid) {
        result.pos.push(i);
        result.peaks.push(arr[i]);
      }
    } else {
      result.pos.push(i);
      result.peaks.push(arr[i]);
    }
  }

  return result;
}

console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]), {
  pos: [3, 7],
  peaks: [6, 3],
});
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]), { pos: [2], peaks: [3] });
console.log(pickPeaks([1, 1, 1, 1]), { pos: [], peaks: [] });

// An array of 0 or more positive integers.
// Return an object containing the peak elements and the indexes. The first and last elements are not to be considered peaks.

// Delcare an object with peak and pos properties equal to empty arrays.
// Delcare a caching array containing the first elem and index.
// Iterate through the parameter and store the values in the cache.
// If the elem is smaller than the previous, then push the previous into the object.
// Else, continue iterating.
// After iterating, return the object.
