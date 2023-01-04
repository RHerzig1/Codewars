// Use recursion to calculate the Fibonacci sequence starting a n

// function calculateFibonacci(n){
//   const arr = [0, 1]

//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2]
//   }

//   return arr[n]
// }

function calculateFibonacci(n) {
    if(n < 2) return n
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2)
}

console.log(calculateFibonacci(3), 2)
console.log(calculateFibonacci(10), 55)
console.log(calculateFibonacci(12), 144)

// A whole number 0 or greater.
// Return the result of calculating the Fibonacci sequence starting with n.