// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time. Your task is to return the number of JavaScript developers coming from Europe.

function countDevelopers(list) {
  let count = 0
  for (let key of list) {
    if (key.continent === 'Europe' && key.language === 'JavaScript') {
      count++
    }
  }
  return count
}

// An array of objects.
// AAn integer of the number of developers coming from "Europe"
// Create a count variable. Using a for...of loop and an if statement, add +1 to the count every time an object contains both Europe and JavaScript values.

// https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript