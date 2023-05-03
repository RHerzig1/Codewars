// Write a function that, given recipe and ingredient objects, calculates how many times the meal can be made.

function calculateRecipe(recipe, available) {
  const result = [];

  for (const ingredient in recipe) {
    const product = Math.floor(available[ingredient] / recipe[ingredient]) || 0;
    if (product === 0) return 0
    result.push(product);
  }

  return Math.min(...result);
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(calculateRecipe(recipe, available), 2);

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(calculateRecipe(recipe, available), 0);

// Two objects. First is the recipe with ammounts, second is available ingredients.
// Calculate how many times the recipe can be created with the provided ingredients.

// Declare a counter array.
// Iterate through the recipe.
// Divide the available value by the recipe value. Round down and push to the array.
// Return the minimum value of the array.
