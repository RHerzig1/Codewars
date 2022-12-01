// Fizz Buzz

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log('Fizz Buzz')
    }
    else if (i % 2 === 0) {
      console.log('Fizz')
    }
    else if (i % 3 === 0) {
      console.log('Buzz')
    }
    else {
      console.log(i)
    }
  }
}

fizzBuzz(10) // 1, 'Fizz', 'Buzz', 'Fizz', 5, 'Fizz Buzz', 7, 'Fizz', 'Buzz', 'Fizz'.

// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// A number. Whole number. Positive. No tricks.
// Print out each increment of 1 - the number, unless:
// If the increment is divisible by 2, print 'Fizz'.
// If the increment is divisible by 3, print 'Buzz'.
// If the increment is divisible by 2 and 3, print 'Fizz Buzz'.

// Create a for loop starting at 1 - number.
// Use conditionals to check for the value and print the appropriate response.