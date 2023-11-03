// Write a function that returns an integer indicating how many times a character rotates.

function spinAround(turns) {
  let rotation = 0;

  for (const elem of turns) {
    if (elem === "right") {
      rotation += 0.25;
    } else if (elem === "left") {
      rotation -= 0.25;
    }
  }

  return Math.floor(Math.abs(rotation));
}

console.log(spinAround(["right", "right", "right", "right"]), 1);
console.log(spinAround(["left", "left", "left", "left"]), 1);
console.log(spinAround(["left", "left", "left"]), 0);
console.log(
  spinAround(["right", "left", "left", "right", "left", "right", "left"]),
  0
);
console.log(
  spinAround([
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "left",
    "right",
    "right",
    "right",
    "right",
    "left",
  ]),
  2
);

// An array containing strings. Either 'left' or 'right'. Never empty.
// Return a number indicating the amount of full rotations the character would do. Always a positive integer.