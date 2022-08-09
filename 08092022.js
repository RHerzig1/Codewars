// Add dashes to odd numbers only
// In the provided integer, evaulate each digit. If the number is odd, add a dash on each side. Do not add consecutive dashes and do not add a dash to the first or last index.

function dashatize(num) {
  if (!num && num !== 0) return 'NaN'
  num = Array.from(String(Math.abs(num))).map(Number)
  
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 1) {
      if (num[i + 1] || num[i + 1] === 0) {
        num.splice(i + 1, 0, '-')
      }
      if (i > 0 && num[i - 1] !== '-') {
        num.splice(i, 0, '-')
        i++
      }
    }
  }
  return num.join('')
}

  // Parameter is an integer.
  // Return an string with dashes around odd numbers.
  // 30478 -> '3-04-7-8'
  // -1 -> '1'
  // test -> NaN
  // Check if the parameter is a number. If so, ensure it's positive. If not, return NaN.
  // Split the parameter into an array of integers.
  // For each element, test whether or not it is odd.
  // If so, test whether there is an element before it and that it's an integer. If so, insert a dash.
  // In addition, test whether there is an element after it. If so, insert a dash.
  // Join the array into a string.
  // Return the string. 
