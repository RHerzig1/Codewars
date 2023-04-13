// Write a function that returns whether a string is a valid phone number.

// function validPhoneNumber(phoneNumber){
//   if (phoneNumber.length != 14) return false
//   if (phoneNumber[0] != '(') return false
//   if (typeof +phoneNumber[1] != 'number') return false
//   if (typeof +phoneNumber[2] != 'number') return false
//   if (typeof +phoneNumber[3] != 'number') return false
//   if (phoneNumber[4] != ')') return false
//   if (phoneNumber[5] != ' ') return false
//   if (typeof +phoneNumber[6] != 'number') return false
//   if (typeof +phoneNumber[7] != 'number') return false
//   if (typeof +phoneNumber[8] != 'number') return false
//   if (phoneNumber[9] != '-') return false
//   if (typeof +phoneNumber[10] != 'number') return false
//   if (typeof +phoneNumber[11] != 'number') return false
//   if (typeof +phoneNumber[12] != 'number') return false
//   if (typeof +phoneNumber[13] != 'number') return false

//   return true
// }

function validPhoneNumber(phoneNumber){
  return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}

console.log(validPhoneNumber("(123) 456-7890"), true)
console.log(validPhoneNumber("(1111)555 2345"), false)
console.log(validPhoneNumber("(098) 123 4567"), false)

// A string containing a valid or invalid phone number.
// Return true if the phone number is valid, or false if it isn't. A valid phone number follows this format "(xxx) xxx-xxxx"

// Write regex to test the phone number.