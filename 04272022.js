// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
  let array = []
  for (let i = 0; i <=n; i++){
    array.push(2**i)
  }
  return array
}

powersOfTwo(2)

// P: A non-negative integer.
// R: An array, nth elements long, containing 2**index.
// E: 2  -> [1, 2, 4]   ([2^0, 2^1, 2^2])
// P: Create an array with n number of indexes. Set each element a value of 2, then for each element multiply to the power of it's integer. Return the array.