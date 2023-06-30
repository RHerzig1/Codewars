// Write a closure that multiplies two numbers.

function multiply(num1) {
  function product(num2) {
    return num1 * num2
  }

  return product
}

const num1 = multiply(5)

console.log(num1(5), 25)
console.log(num1(10), 50)
console.log(num1(11), 55)



// 