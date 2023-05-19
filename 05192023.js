// Write a function that calculates how long it'll take for an investment to reach a specified total.

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  let gain = 0
  
  while (principal < desired) {
    gain = 0
    gain += principal * interest 
    gain -= gain * tax
    principal += gain
    years++
  }
  
  return years
  
}

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3)
console.log(calculateYears(1000,0.01625,0.18,1200), 14)
console.log(calculateYears(1000,0.05,0.18,1000), 0)

// Four parameters:
// Principal: The initial investment as a number. May contain decimal to the hundredths.
// Interest: Interest rate as a decimal.
// Tat rate: Tax rate as a decimal.
// Desired: The desired amount.
// Return the number of years it'll take to reach the desired amount.

// Declare a years variable equal to 0.
// While desired < principal, apply yearly calculations.
// Increase year++ each loop.
// Return years.