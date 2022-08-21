// Create a constructor function
// Create a constructor function that has properties for the firstName, lastName, and the whole name.

function NameMe(first, last) {
  this.firstName = first,
  this.lastName = last,
  this.name = `${this.firstName} ${this.lastName}`
}