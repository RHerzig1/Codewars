// Write a function that converts an unsigned 32 bit number into an IPv4 address.

function int32ToIp(int32) {
  let binaryArr = int32.toString(2).padStart(32, "0").split("");
  const binary = [];

  while (binaryArr.length > 0) {
    binary.push(binaryArr.splice(0, 8).join(""));
  }

  return binary.map((elem) => parseInt(elem, 2)).join(".");
}

console.log(int32ToIp(2149583361), "128.32.10.1")
console.log(int32ToIp(2147483647), "127.255.255.255")
console.log(int32ToIp(32), "0.0.0.32")
console.log(int32ToIp(0), "0.0.0.0")

// An integer between 0 and 2147483647.
// Return the IPv4 representation of that integer.

// Convert the number to binary.
// Split it into 4 sections, each with 8 characters.
// Convert each section back into a number.
// Return the IPv4 address.