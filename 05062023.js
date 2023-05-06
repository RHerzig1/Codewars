// Write a function that converts a number into roman numerals.

function intToRoman(num){
  const result   = []
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  for (let i = 0; i < decimal.length; i++) {
      while (num >= decimal[i]) {
        result.push(roman[i])
        num -= decimal[i]
      }
  }
  
  return result.join('')
}

console.log(intToRoman(5), 'V')
console.log(intToRoman(10), 'X')
console.log(intToRoman(15), 'XV')
console.log(intToRoman(2543), 'MMDXLIII')

// A whole integer greater or equal to zero.
// A string containing the roman numeral equivalent of the parameter.

// Declare an empty result array.
// Declare an array of decimal conversions.
// Declare an array of roman numeral conversions.
// Loop through the decimal array. While the parameter is bigger than that value, push the roman equivalent to the result array and subtract the amount from num.
// Join the result and return it.