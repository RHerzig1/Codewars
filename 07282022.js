// Extend Array class to include mathematical methods.
// Create extensions of the Array class to include square(), cube(), average(), sum(), even() and odd() methods.

Array.prototype.square = function() {
  return this.map(elem => elem * elem)
}

Array.prototype.cube = function() {
  return this.map(elem => elem * elem * elem)
}

Array.prototype.sum = function() {
  return this.reduce((a, b) => a + b, 0)
}

Array.prototype.average = function() {
  return this.reduce((a, b) => a + b, 0) / this.length
}

Array.prototype.even = function() {
  return this.filter(elem => elem % 2 === 0)
}

Array.prototype.odd = function() {
  return this.filter(elem => elem % 2 === 1)
}