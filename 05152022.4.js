// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
    let result = []
    for (let i = a; i <= b; i++) {
        result.push(i)
    }

    return result
}

// Two integers, the first smaller than the second.
// An array of the two parameters and all integers inbetween.
// (3, 5) -> [3, 4, 5]
// Use a for loop with i = a while i < b and push i into a new array.

// https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript