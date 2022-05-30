// You are given an array of objects. Each object is a developer profile. Return 'true' if the array contains at least 1 Ruby developer or 'false' if it doesn't.

function isRubyComing(list) {
  let ruby = false
  list.forEach(object => {
     if (object.language === 'Ruby') {
       ruby = true
     }
  })
  return ruby
}

function isRubyComing(list) {
  return list.some(object => object.language === 'Ruby')
}

// An array of objects.
// A boulean.
// Use the some() method to iterate through the array and return true or false.

// https://www.codewars.com/kata/5827acd5f524dd029d0005a4