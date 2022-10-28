// Return true if there are an identical number of 'x' and 'o' characters in string

function XO(str) {
  const arr = str.toLowerCase().split('')
  const x = arr.filter(elem => elem === 'x')
  const o = arr.filter(elem => elem === 'o')
  return x.length === o.length
}

console.log(XO("ooxx")) // true
console.log(XO("xooxx")) // false
console.log(XO("ooxXm")) // true
console.log(XO("zpzpzpp")) // true
console.log(XO("zzoo")) // false

// The parameter is a string containing uppercase and lowercase characters. Never empty. No numbers or punctuation.
// Return true or false, whether the array contains an equal number of 'x' and 'o' strings of any case.
// toLowerCase.
// Filter 'x'.
// Filter 'o'.
// Return length comparison.