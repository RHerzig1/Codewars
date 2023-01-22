// Sort numbers in string using digit sum

function orderString(str) {
  if (str === '') return ''
  const arr = str.split(' ').map(Number).sort()
  const numtMap = {}
  arr.forEach((elem) => numtMap[elem] = returnSumOfDigits(elem))
  return arr.sort((a, b) => numtMap[a] - numtMap[b]).join(' ')
}

function returnSumOfDigits(num) {
  const sum = String(num).split('').map(Number).reduce((a, c) => a + c, 0)
  return sum
}

console.log(orderString("56 65 74 100 99 68 86 180 90"), "100 180 90 56 65 74 68 86 99")
console.log(orderString("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
console.log(orderString(""), "")

// A string of numbers > 0. Numbers are seperated by a space.
// Return a string of numbers sorted by digit sum.

// Create an array of numbers.
// Create a cache for numbers/sums.
// Use the cache to sort the array.
// Join the array and return.