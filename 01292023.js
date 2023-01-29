// Write an algorithm that takes an array of integers and reduces consecutive values into a range

function solution(list) {
  let result = []
  let count

  for (let i = 0; i < list.length; i += count) {
    let range = [list[i]]
    count = 1
    while (list[i + count] === list[i] + count) {
      range.push(list[i + count])
      count++
    }
    range = range.length <= 2 ? range.join(',') : [range[0], range[range.length - 1]].join('-')
    result.push(range)
  }

  return result.join(',')
}

console.log(solution([1, 2, 3, 5, 6, 8, 10]), '1-3,5,6,8,10')
console.log(solution([-5, -4, -3, 0, 2, 3, 4]), '-5--3,0,2-4')

// An array of integers. Whole numbers. Positive or negative. Array is never empty. Sorted in ascending order. Numbers never repeat.
// Return a string of integers with the consectutive values summarized into a range.

// Loop through the array of numbers.
// For each elem, increment up until the next number doesn't exist. Push that range into a result array.
// Format the resut into a string and return.