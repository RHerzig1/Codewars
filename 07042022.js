// Exponents to each digit
// Provided two positive integers, multiply each digit of the first integer by an exponent. The exponent starts with the second parameter, then +1 each digit from left to right. Add each product, and divide by the original first integer. Return the outcome as in integer or -1 if it includes decimals.

function digPow(n, p){
  let calculation = Array.from(n.toString()).map(Number)
  
  for (let i = 0; i < calculation.length; i++) {
    calculation[i] = Math.pow(calculation[i], p)
    p++
  }
  
  calculation = calculation.reduce((a, b) => a + b) / n
  return Math.round(calculation) == calculation ? calculation : -1
}

// The parameter is positive integers. The first is the starting integer and the second is the starting exponent.
// Return the quotient of the calculated outcome with the starting integer, or -1 if not an integer. 
// (89, 1) -> 1 (8¹ + 9² = 89 / 89 = 1)
// Assign n to a new variable.
// Seperate the new variable into an array.
// For each, multiply by the exponent p, then add p++ for the next digit.
// Reduce the array by adding all the digits.
// Divide the sum by the original paramter (n).
// If the number is an integer, return it. Else return -1.