// Write an algorithm that calculates the number of bounces a ball makes from a given height

function bouncingBall(height, bounce, window) {
  if (height <= 0) return -1;
  if (bounce <= 0 || bounce >= 1) return -1;
  if (window >= height) return -1;

  let result = 1;

  while (height * bounce > window) {
    height *= bounce;
    result += 2;
  }

  return result;
}

console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
console.log(bouncingBall(3.0, 1.0, 1.5), -1);

// height is the distance of the drop. Must be greater than 0.
// bouce is the percentage of height per bouce. Must be between greater than 0 and less than 1.
// window is the height of the window. It must be less than height.
// Return the number of times the ball passes the window, both decending and ascending. Height must be greater than the window. If any parameters are invalid, return -1.

// Use conditions to check for invalid parameters.
// Declare result equal to 1.
// While height is greater than window, multiply it by bounce. For each iteration, add 2 to result.
// Return result.
