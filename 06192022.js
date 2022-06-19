// Write a function that takes an integer, and tests to find whether or not it's a product of two consecutive Fibonacci values.
// Fibonacci values: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ... 

function productFib(prod) {
  let arrayFib = [0, 1]
  
  for (let i = 0; prod > arrayFib[i] * arrayFib[i + 1]; i++) {
    arrayFib.push(arrayFib[i] + arrayFib[i + 1])
  }
  
  let lastElement = arrayFib.length - 1

  return arrayFib[lastElement] * arrayFib[lastElement - 1] == prod ? [arrayFib[lastElement - 1], arrayFib[lastElement], true] : [arrayFib[lastElement - 1], arrayFib[lastElement], false]
}

function productFib(prod) {
  let [a, b] = [0, 1]
  while (a * b < prod) {[a, b] = [b, a + b]}
  return [a, b, a * b == prod]
}

// Parameter is a positive integer.
// Return an array containing the values of f(n) and f(n+1) that have a product equal to (or the smallest value greater than, if an exact match isn't found) and true or false.
// (4895) -> [55, 89, true]
// (5895) -> [89, 144, false]
// Use a for loop that runs Fibonacci values until the product equals the parameter.
// Use conditionals to test whether or not the product equals the parameter.
// If so, return true. Else, return false.