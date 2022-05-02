// You will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters.

const solve = (s) => {
    let result = [0, 0, 0, 0]
    for (let i = 0; i !== s.length; i++) {
      if (s[i].toLowerCase() > s[i]) {
        result[0] += 1
      } else if (s[i].toUpperCase() !== s[i]) {
        result[1] += 1
      } else if (s[i] >= 0 && s[i] <= 9) {
        result[2] += 1
      } else {
        result[3] += 1
      }
    }
    return result
}

solve("Codewars@codewars123.com")

// P: A string.
// R: An array containing a count of [uppercase, lowercase, numbers, special] characters within the string.
// E: ("Codewars@codewars123.com") -> [1,18,3,2]
// P: Iterate through string via a for loop to test each character using conditionals. If a conditional equals true, then add 1 to the corresponding index in an array. Return the end array.