// Write a function that counts the number of Friday the 13ths in a given year.

function unluckyDays(year){
  let count = 0;

  for (let i = 1; i <= 12; i++) {
    const date = new Date(`${i}/13/${year}`)
    const day = date.getDay()
    
    if (day === 5) {
      count++
    }
  }
  
  return count
}

console.log(unluckyDays(2023), 2)
console.log(unluckyDays(2065), 3)
console.log(unluckyDays(2005), 1)
console.log(unluckyDays(1000), 1)
console.log(unluckyDays(3000), 1)

// A number. 1000 <= number <= 3000. Always a positive integer. Always a valid number.
// Return a number indicating the count of Friday the 13ths in the provided year.

// Use the Date() object and getDate() method to count each month.