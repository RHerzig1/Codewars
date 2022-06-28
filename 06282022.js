// Sum of squared divisors
// Given two integers, return all the numbers equal to or between where the sum of the divisors squared is itself a square.

function listSquared(m, n) {
  const integerPairs = []

  for (let i = m; i <= n; i++) {
    
    const divisors = findDivisors(i)  
    const sumOfSquares = findSumOfSquares(divisors)
    const sqrt = findSquareRoot(sumOfSquares)

    if (sqrt) {
      integerPairs.push([i, sumOfSquares])
    }
  }
  
  return integerPairs
}

function findDivisors(i) {
  let testingArray = []

  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      testingArray.push(j)
    }
  }

  return testingArray
}

function findSumOfSquares(array) {
  return array.reduce((a, b) => a + b**2)
}

function findSquareRoot(integer) {
 return (Math.sqrt(integer) % 1 === 0)
}

// Parameters are two integers, both greater than 1.
// Return an array containing the integers that pass the implemented test. Use this format: [[the original integer, the sum of divisors squared for that original integer]]
// Declare an empty array to return.
// Iterate from m to n.
//  For each, find all the divisors.
//  Square the divisors.
//  Add the squares.
//  If the the divisor is a perfect square, add it to the list.
// Then return the list.