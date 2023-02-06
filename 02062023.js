// Write an algorithm that calculates then number of levels a pyramind could be given built given a budget and price per brick.

function returnNumberOfLevels(budget, price) {
  if (price > budget) return 0
  
  let level = 1
  let cost = price
  
  while (budget >= ((level + 1) * (level + 1) * price) + cost) {
    level++
    cost += (level * level) * price
  }
  return level
}

console.log(returnNumberOfLevels(9, 2), 1)
console.log(returnNumberOfLevels(21, 1.5), 3)
console.log(returnNumberOfLevels(0, 4), 0)
console.log(returnNumberOfLevels(-1, 4), 0)

// The budget. May be positive or negative. Always a whole number.
// The price per brick. Always greater than 0. May be a decimal.