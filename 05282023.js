// Write a function that confirms whether a coupon is valid, based on code and date.

function isValidCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

console.log(isValidCoupon("123", "123", "July 9, 2015", "July 9, 2015"), true)
console.log(isValidCoupon("123", "abc", "July 9, 2015", "July 9, 2015"), false)
console.log(isValidCoupon("123", "123", "July 9, 2015", "July 2, 2015"), false)
console.log(isValidCoupon("123", "abc", "July 9, 2015", "July 2, 2015"), false)

// Two codes represented by strings and two dates in 'Month day, year' format.
// Return true or false indicating a valid coupon. The codes must matcha and it can't be expired.

// Compare the codes and return true or false.
// Parse the dates and ensure the current date is less than expiration date.