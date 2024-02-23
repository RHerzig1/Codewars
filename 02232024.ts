// Write a function that calculates the number of car fleets that reach the target destination.

function carFleet(target: number, positions: number[], speeds: number[]): number {
  const stack: number[] = [];
  const vehicles: number[][] = positions.map((elem, index) => [elem, speeds[index]]).sort((a, b) => a[0] - b[0]);

  for (let i = vehicles.length - 1; i >= 0; i--) {
    const [position, speed] = vehicles[i];
    const distance = target - position;
    const time = distance / speed;

    if (stack[stack.length - 1] < time || stack.length === 0) {
      stack.push(time);
    }
  }

  return stack.length;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]), 3);
console.log(carFleet(10, [3], [3]), 1);
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]), 1);

// Target: number. The distance to the target. 0 < target <= 10^6. Always valid.
// Position: number[]. Starting positions of each vehicle. 1 <= position.length <= 10^5. 0 <= position[i] < target. Always unique and valid.
// Speed: number[]. The constant speed of each vehicle. speed.length === position.length. 0 < speed[i] <= 10^6. Always valid.

// Declare a stack array.
// Create [position, speed] for each vehicle, sort by position.
// Iterate from last position to the first.
// Calculate the time it takes for each vehicle to reach the target.
// If the time is greater than the previous vehicle, push it it the stack.
// Else, do nothing. This vehicle will catch up and become a "fleet".
// Return the length of the stack.
