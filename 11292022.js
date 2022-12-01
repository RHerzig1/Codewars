// Find next largest number using all the same digits

function nextBigger(n){
  let arr = String(n).split('').map(Number)
 
  let indexOfLesserDigit = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > arr[i - 1]) {
      indexOfLesserDigit = i - 1
      break
    }
  }
 
  if (arr.length === 1 || indexOfLesserDigit === -1) return -1
 
  const subSet = arr.slice(indexOfLesserDigit + 1)
  const nextLargerDigitInSubSet = Math.min(...subSet.filter(elem => elem > arr[indexOfLesserDigit]))
  const indexOfNextLargerDigitInSubSet = arr.findIndex((elem, index) => index > indexOfLesserDigit && elem === nextLargerDigitInSubSet)
 
  const temp = arr[indexOfNextLargerDigitInSubSet]
  arr[indexOfNextLargerDigitInSubSet] = arr[indexOfLesserDigit]
  arr[indexOfLesserDigit] = temp

  return Number(arr.slice(0, indexOfLesserDigit + 1).join('') + arr.slice(indexOfLesserDigit + 1).sort((a, b) => a - b).join(''))
}

console.log(nextBigger(12)) // 21
console.log(nextBigger(395)) // 539
console.log(nextBigger(33561)) // 33615
console.log(nextBigger(98375)) // 98537

// A positive integer.
// Rearrange the digits to return the next closest bigger number. If no bigger number can be created, return -1.

// Split the number into an array of single char elements.
// Iterate backwards.
// If high index number is higher lower than lowered index, swap and return.
// If values are different, return new value. Else, return -1.