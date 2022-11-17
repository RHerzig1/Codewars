// Use recursion to decrease the parameter below 100

function SubtractSum(n){
  do {
    let sum = Array.from(String(n)).map(Number).reduce((a, c) => a + c, 0)
    n = n - sum
  } while (n > 100)
  if (n % 9 === 0) return 'apple'
}

// Using recursion
function SubtractSum(n){
  if (n <= 100) return "apple"
  let sum = Array.from(String(n)).reduce((a, c) => a + Number(c), 0)
  return SubtractSum(n - sum)
}

// Number >= 10 < 10000. Whole number.
// Return the associated fruit from the table.
// Add each digit.
// Subtract the sum from n.
// Return the fruit from the table. If no fruits are valid, repeat the loop.