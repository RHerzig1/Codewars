// Write a function that calculates the number of paper folds it takes to reach the moon.

function foldTo(distance) {
  if (distance < 0) {
    return null;
  }

  let height = 0.0001;
  let folds = 0;

  while (height <= distance) {
    height *= 2;
    folds += 1;
  }

  return folds;
}

console.log(foldTo(384000000), 42);
console.log(foldTo(1e-7), 0);
console.log(foldTo(-1), null);

// A distance to reach, in meters. Paper thickness is always 0.0001 meters. Each fold doubles its thickness.
// Return a number that indicates the number of folds to reach the provided thickness. If then number is 0, then return null.

// Define thickness and folds.
// While height is < distance, multiply it by 2. Add to the fold count.
// Return fold.
