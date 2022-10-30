// Convert roman numerals to integers

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const romanToIntObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let array = [...s]
  let integer = null

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'I' && array[i + 1] === 'V') {
      integer += 4
      i++
    }
    else if (array[i] === 'I' && array[i + 1] === 'X') {
      integer += 9
      i++
    }
    else if (array[i] === 'X' && array[i + 1] === 'L') {
      integer += 40
      i++
    }
    else if (array[i] === 'X' && array[i + 1] === 'C') {
      integer += 90
      i++
    }
    else if (array[i] === 'C' && array[i + 1] === 'D') {
      integer += 400
      i++
    }
    else if (array[i] === 'C' && array[i + 1] === 'M') {
      integer += 900
      i++
    }
    else integer += romanToIntObj[array[i]]

  }

  return integer
};

console.log(romanToInt('III')) // 3
console.log(romanToInt('IV')) // 4
console.log(romanToInt('V')) // 5
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994

// The parameter is a string containing valid roman numerals. The length may be 1 - 15.
// Return the integer represented by the roman numerals.
// Create an object containing the roman numbers and their number counterparts.
// Create a conditional to select the values.
// Use reduce() to combine the values and return the sum.