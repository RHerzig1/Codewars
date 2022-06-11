// You're given two arrays of integers. Check that, in any order, array2 has the same values as array1 but squared. If so, return true. If not, or an array is null, return false.

function comp(array1, array2){

  if (array1 == null || array2 == null) {
    return false
  }

  array1 = array1.sort((a, b) => a - b)
  array2 = array2.sort((a, b) => a - b)

  for (let i = 0; i < array1.length; i++) {
    if (array2[i] != Math.pow(array1[i], 2)) {
      return false
    }
  }

  return true
}

// Two arrays containing integers.
// Return true if array2 contains the same numbers as array1, but squared. If not, return false.
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// return true
// Use a conditional to check whether either array is null. If so, return false.
// Sort both arrays from smallest to greatest number.
// Use a For loop to iterate through both arrays.
// Inside the loop, use a conditional. If array1[i] != Math.pow(array2[i], 2) then return false.
// Outside the conditional, return true.