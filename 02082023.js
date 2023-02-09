// Given the depth of hole, how long will it take to reach the top if you climb 3ft during the day and fall 2ft at night?

function calculateDays(depth) {
  let height = 0
  let days = 0

  while (height < depth) {
    days += 1
    height += 3
    if (height >= depth) break
    height -= 2
  }

  return days
}

console.log(calculateDays(30), 28)
console.log(calculateDays(0), 0)
console.log(calculateDays(3), 1)

// A positive integer greater or equal to 0. Always a whole number.
// Return the number of days it would take to reach the top.

// Declare a height variable equal to 0.
// Declare a days variable equal to 0.
// Create a while loop, add the height climbed per day.
// Each incriment, add 1 day.
// After iterating, return days.