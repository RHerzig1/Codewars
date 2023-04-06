// Write a Node.js function that converts a string to an md5 hash.

const crypto = require("crypto");

function passHash(str) {
  return crypto.createHash("md5").update(str).digest("hex");
}

console.log(passHash("password"), "5f4dcc3b5aa765d61d8327deb882cf99");
console.log(passHash("abc123"), "e99a18c428cb38d5f260853678922e03");

// A string containing letters and numbers. Never empty.
// Return the string converted to an md5 hash encoded in hexadecimal.

// Require the crypto module.
// Create the hash using the string.
// Encode in hex.