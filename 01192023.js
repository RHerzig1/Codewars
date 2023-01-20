// Use recursion to return the total sum of N * (N - i)

function calculateSumOfProducts(num) {
  const initialNum = num

  function calculateSumOfProductsRecursion(num) {
    if (num <= 1) return initialNum
    return (num * initialNum) + calculateSumOfProductsRecursion(num - 1)
  }

  return calculateSumOfProductsRecursion(num)
}

console.log(calculateSumOfProducts(5), 75)
console.log(calculateSumOfProducts(6), 126)

// A whole number > 0.
// Return the total sum of N * (N - i) where i ranges from N to 1.

// Create a closure to preserve a copy of num.
// Create a recursive function and call it.
// Base case: return num.
// Recursive case: return num * (num )