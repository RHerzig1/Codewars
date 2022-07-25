// Use higher-order functions to automate username creation
// Using information provided from an array of objects, return a username for each object.

function addUsername(list) {
  list.map(object => {
    const firstName = object.firstName.toLowerCase()
    const lastName = object.lastName.toLowerCase().slice(0, 1)
    const year = calculateAge(object.age)
    object.username = firstName + lastName + year
  })
  return list
}

function calculateAge(age) {
  let date = new Date().getFullYear()
  return date - age
}

// Parameter is an array of objects.
// Add a username property for each object. Build it by concatenating the first name, first letter of the last name, and the date of birth. Make it all lower-case.
// "John S. 30" -> "johns1992"
// Iterate through each object and populate the variables.
// Declare first, last, and year variables.
// Concatenate the values into a username property and add it to each object.
// returnt the completed list.