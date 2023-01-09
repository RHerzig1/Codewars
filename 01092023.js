// Calculate the total value of each element after add, in order, the elements of another array

function beggars(values, n){
  if (n === 0) return []

  const result = new Array(n).fill(0)
  
  for (let i = 0; i < values.length; i++) {
    result[i % n] += values[i]
  }
  
  return result
}

console.log(beggars([1,2,3,4,5],1), [15])
console.log(beggars([1,2,3,4,5],6), [1,2,3,4,5,0])
console.log(beggars([1,2,3,4,5],0),[])

// An array of values to spread, in order, to the beggars.
// An integer representing the number of beggars.
// Return an array of values representing the amount each beggar gets, in order.