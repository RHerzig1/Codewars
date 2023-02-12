// Write an algorithm that returns the amount of multiples an integer needs to contain all 0-9 at least once.

function calculateDepth(num, multiple = 1, numMap) {
  numMap = numMap || {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  }

  let condition = true
  for (const num in numMap) {
    if (numMap[num] === false) {
      condition = false
      break
    }
  }

  if (condition) return 0
  
  const result = num * multiple
  const arr = String(result).split('').map(Number)

  for (const num of arr) {
    if (numMap[num] === false) numMap[num] = true
  }

  return calculateDepth(num, multiple + 1, numMap) + 1
}

console.log(calculateDepth(1), 10)
console.log(calculateDepth(42), 9)

// An integer. Whole number greater than 0.
// Return the depth of that number. Depth means the number of multuples it takes before all numbers 0-9 appear at least once.

// Declare a numMap = {0-9 = false}
// Base case: if all numMap values are true, return 0.
// Recursive case: Calculate the multiple and change numMap to true where applicable. Call calculateDepth + 1.