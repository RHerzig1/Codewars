// Create a function that takes two parameters: an array of integers, and a single integer. Return a new array containing even numbers from the array parameter. Copy the numbers from right to left, but keep them in their original order. The new array should be number.length.

function evenNumbers(array, number) {
  const newArray = []
  array.reverse().forEach(elem => {
    if (elem % 2 == 0 && newArray.length < number) {
      newArray.push(elem)
    }
  })
  return newArray.reverse()
}

const evenNumbers = (array, number) => array.filter(elem => elem % 2 == 0).slice(-number)

// An array of numbers and a single integer.
// An array of number.length that contains only positive integers.
// ([1, 2, 3, 4, 5, 6, 7, 8], 2) -> [6, 8]
// Create a new empty array.
// Iterate through the array. If the element is even AND newArray.length < number, push it to newArray.
// Return newArray.