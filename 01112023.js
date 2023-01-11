// Move zeros to end of array while keeping other values in place

// function moveZeros(arr) {
//   const result = []
//   let counter = 0
//   for (const elem of arr) {
//     if (elem !== 0) result.push(elem)
//     else counter++
//   }
//   for (let i = 0; i < counter; i++) {
//     result.push(0)
//   }
//   return result
// }

function moveZeros(arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ]
}

console.log(moveZeros([0, 1, 2, 0, 'a', 'b']), [1, 2, 'a', 'b', 0 , 0])
console.log(moveZeros([1, 2, 'a', 'b']), [1, 2, 'a', 'b'])
console.log(moveZeros([]), [])

// An array containing numbers and letters in any order. May be empty.
// Rearrange the array so that 0s appear at the end, without changing the order of the other elements.

// Filter the elements that dont equal 0 and place them in an array.
// Filter the elements that do equal 0 and place them at the end of the array.
// Return the array.