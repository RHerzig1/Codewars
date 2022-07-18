// Calculate time spent in supermarket queue
// Given an array of customers being in line for elem minutes, and n registers open, calculate how long it will take for all customers to get throught the registers.

function queueTime(customers, n) {
  const registers = new Array(n).fill(0)
  for (let waitTime of customers) {
    const lowestWaitRegister = registers.indexOf(Math.min(...registers))
    registers[lowestWaitRegister] += waitTime
  }
  return Math.max(...registers)
}

// The parameters are an array containing positive integers and a 2nd integer.
// Return a positive integer.
// ([2,3,10], 2) -> 1
// Declare an array variable named registers.
// Declare an integer variable named minutes.
// Iterate through the customers array.
// If registers.length < n, push customers[i] into it.
// Else, find the min value and subtract it from all elements.
// Add that value to the minutes variable.
// Replace the 0 value with the next customers[i]
// When i reaches the end, reduce the registers array and add the total to minutes.
// Return minutes.