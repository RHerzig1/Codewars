// Write a function that warns an array of sheep of a hidden wolf.

export function warnTheSheep(queue: string[]): string {
  const wolfPosition: number = queue.length - queue.indexOf("wolf");
  return wolfPosition > 1 ? `Sheep number ${wolfPosition - 1}! You are about to be eaten by a wolf!` : `Stop eating my sheep!`;
}

console.log(warnTheSheep(["sheep", "wolf", "sheep"]), "Sheep number 1! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "sheep", "wolf"]), "Stop eating my sheep!");

// An array of strings. 2 <= array.length <= 15. Elements are all "sheep" except one, which is "wolf". Always a valid input.
// Return a string warning the next sheep (to the right) about the wolf. If the wolf is at the end of the array, tell it to stop eating sheep.
