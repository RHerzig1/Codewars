// Simulate the Monty Hall problem.

function montyHallSimulation(totalNumberofTries, chosenDoorSwap) {
  let winCount = 0;
  const DOORS = [1, 2, 3];

  for (let i = 0; i < totalNumberofTries; i++) {
    const winningDoor = Math.floor(Math.random() * DOORS.length) + 1;
    let chosenDoor = Math.floor(Math.random() * DOORS.length) + 1;

    // Host removes the door that is neither the winning door nor the chosen door.
    const removedDoor = DOORS.find((door) => door !== winningDoor && door !== chosenDoor);

    // If the player swaps, switch to the remaining door.
    if (chosenDoorSwap) {
      chosenDoor = DOORS.find((door) => door !== removedDoor && door !== chosenDoor);
    }

    // Check whether the chosen door is the winning door.
    if (chosenDoor === winningDoor) {
      winCount++;
    }
  }

  const winRate = Math.round((winCount / totalNumberofTries) * 100);
  return `${winRate}% win rate.`;
}

console.log(montyHallSimulation(100000, true)); // Swap strategy
console.log(montyHallSimulation(100000, false)); // No swap strategy
// https://en.wikipedia.org/wiki/Monty_Hall_problem

// Result: Switching the door increases the win rate from 33% to 66%.
