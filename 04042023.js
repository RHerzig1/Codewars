// Write Node.js functions that convert a UTF8 string to Base64 and back.

String.prototype.toBase64 = function() {
  return new Buffer.from(this, 'utf8').toString('base64')
}

String.prototype.fromBase64 = function() {
  return new Buffer.from(this, 'base64').toString('utf8')
}

console.log('this is a string!!'.toBase64(), 'dGhpcyBpcyBhIHN0cmluZyEh')
console.log('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64(), 'this is a string!!')

// Add functions to the prototype to convert a string to Base64 and back to UTF8.
// Return the converted values.

// Call the Node.js Buffer object.
// Pass through the string and encoding type, then convert it using toString()