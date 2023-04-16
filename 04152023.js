// Write a function that converts an RGB value into a Hex value.

function convertRgbToHex(r, g, b) {
  const rgb = [r, g, b].map((dec) => {
    if (dec > 255) {
      return 255;
    }
    if (dec < 0) {
      return 0;
    }
    return dec;
  });

  const hex = [];
  for (const dec of rgb) {
    const chars = dec.toString(16).toUpperCase();
    hex.push(chars);
    if (chars.length % 2 === 1) {
      hex.push(0);
    }
  }
  return hex.join("");
}

console.log(convertRgbToHex(255, 255, 255), "FFFFFF");
console.log(convertRgbToHex(255, 255, 300), "FFFFFF");
console.log(convertRgbToHex(0, 0, 0), "000000");
console.log(convertRgbToHex(148, 0, 211), "9400D3");

// Three integers 0-255. Values outside of that range must be rounded to closest valid value.
// Return a string representing the same color as a hexadecimal.

// Put parameters in an array. Loop through and fix invalid values.
// Convert each value to hex and return a string.