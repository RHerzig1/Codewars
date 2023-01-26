// Write a function that adds 1 to the end of a string, or increments the number if one already exists

function incrementString(str) {
  const letters = []
  const numbers = []
  const arr = str.split('')

  for (let i = str.length - 1; i >= 0; i--) {
    if (Number(arr[i]) >= 0) {
      numbers.push(Number(arr[i]))
    }
    else {
      letters.push(...arr.slice(0, i + 1))
      break
    }
  }

  number = numbers.length > 0 ? incrementArray(numbers.reverse()).join('') : 1
  return letters.join('') + number
}

function incrementArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === 0 && arr[i] === 9) {
      arr[i] = 0
      arr.unshift(1)
    }
    else if (arr[i] === 9) arr[i] = 0
    else {
      arr[i] = arr[i] + 1
      break
    }
  }
  return arr
}

console.log(incrementString('hello'), 'hello1')
console.log(incrementString('hello1'), 'hello2')
console.log(incrementString('hello0001'), 'hello0002')
console.log(incrementString('hello0101'), 'hello0102')
console.log(incrementString('hello9'), 'hello10')
console.log(incrementString('hel99lo9'), 'hel99lo10')


// A string containing a word. Lowercase letters only. Never an empty string. May end in numbers with leading zeros.
// Return the string with the trailing numbers incremented +1 or, if no number exists, trailing with 1. Preserve leading zeros.

// Determine if there's already a number at the end.
// Isolate the number.
// Increment the number.
// Concatenate the number back onto the string and return.