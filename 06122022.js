// A 16" pizza contains 4 8" pizzas. Write a function that calculates the number of pizzas and slices when given the pizza size.

function howManyPizzas(n) {
  const radius = n
  const pi = Math.PI
  const newPizza = pi * radius ** 2
  const standardPizza = pi * 8 ** 2
  const standardSlice = Math.round(standardPizza / 8)
  
  const pizzas = Math.floor(newPizza / standardPizza)
  const slices = Math.round(newPizza % standardPizza / standardSlice)
  
  return `pizzas: ${pizzas}, slices: ${slices}`
}

// An integer indicating the size of the pizza in inches.
// Return the number of pizzas and slices that can contain inside that pizza. An 8" pizza has 8 slices. Round the result.
// 6 -> "pizzas: 0, slices: 5"
// 8 -> "pizzas: 1, slices: 0"
// 12 -> "pizzas: 2, slices: 2"
// 16 -> "pizzas: 4, slices: 0"
// The forumla to calculate area is pi * (r ** 2).
// The area of an 8" pizza is 100.5.
// To calculate the number of pizzas, divide the area of the new pizza by 201.
// To calculate the number of slices, modulus the area of the new pizza by 201, then divide by the area of a standard slice.