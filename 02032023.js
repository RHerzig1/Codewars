// Write an algorithm that converts Roman numerals to an integer.

function romanToInt(str) {
  const romanToInteger = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }

  let num = 0

  for (let i = 0; i < str.length; i++) {
    if (romanToInteger[str[i] + str[i + 1]]) {
      num += romanToInteger[str[i] + str[i + 1]]
      i++
    }
    else num += romanToInteger[str[i]]
  }

  return num
}

console.log(romanToInt("III"), 3)
console.log(romanToInt("LVIII"), 58)
console.log(romanToInt("MCMXCIV"), 1994)

// A string of roman numerals. All uppercase. Never empty. Always valid.
// Return the interger value of the roman numerals.

// Create an object containing roman numerals and their value.
// Declare a num variable equal to 0.
// Iterate through the string.
// If the letter + the next letter exist in the object, add that value and increment i.
// Else, add the single char value.
// Return the num.