// Find the prime factor decomposition of X

function primeFactors(n){
  let valuesAll = []
  let valuesSorted = {}
  let test = 1
  
  for (let i = 3; i < n; i++) {
    if (n % i == 0) {
      valuesAll.push(i)
    }
  }
  
 valuesAll.forEach(elem => {
   for (let i = 2; i < elem - 1; i ++) {
     if (n % i == 0) {
       valuesSorted[i] = n/i
     }
     else {
       valuesSorted[elem] = 1
     }
     
     
   }
 })
  
  console.log(valuesSorted)
}
// You're given an integer > 1
// Return its prime factor decomposition as a string: "(p1**n1)(p2**n2)...(pk**nk)" with the p(i) in increasing order.
// (72) -> "(2**2)(2**3)(3)"
// Create an empty object to hold the multiplication pairs
// Iterate through n to reduce into factors.
// Store the factors into the object.
// Pull values from the object into the string.