// Write a function that uses RegExp to test whether a string is a valid IPv4 addresses in dot-decimal format.

function isValidIP(str) {
  return /^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/.test(str);
}

console.log(isValidIP("0.0.0.0"), true);
console.log(isValidIP("12.255.56.1"), true);
console.log(isValidIP("123,45,67,89"), false);

// A string.
// Return whether or not it's a valid IPv4 address.