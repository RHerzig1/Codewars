// Write a function that, given n, returns whether or not n is a Narcissistic Number. A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number.

function isNarcissistic(n) {
  let isNarcissistic = false
  const integerArray = Array.from(n.toString()).map(Number)
  const integerLength = integerArray.length
  const integerReduced = integerArray.reduce((a, b) => (Math.pow(b, integerLength)) + a, 0)
  
  if (n === integerReduced) {
    isNarcissistic = true
  }
  
  return isNarcissistic
}

// An integer
// Return a boulean indicating whether or not the parameter is a narcissistic number.
// 153 -> true
// Create an integerLength variable, set it equal to n.length.
// Create a isNarcissistic variable, set it equal to false.
// Split the parameter so each number is an element.
// Use the reduce() method to multiply each element by the power of integerLength, then add them.
// If the sum of the above equation equals the parameter, reassign isNarcissistic to true.
// Return isNarcissistic

// https://www.codewars.com/kata/56b22765e1007b79f2000079