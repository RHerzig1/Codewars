// Write a function that returns how long it takes to boil eggs.

function cookingTime(eggs) {
  return Math.ceil(eggs / 8) * 5;
}

console.log(cookingTime(0), 0);
console.log(cookingTime(5), 5);
console.log(cookingTime(10), 10);

// A number. Always a positive integer. 0 <= num <= 100;
// Return the amount of time, in minutes, it takes to boil all the eggs.
// 5 minutes to boil, 8 eggs at the most.
