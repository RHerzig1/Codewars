// Write an algorithm that converts binary to morse code to English.

function decodeBits(bits) {
  bits = bits.replace(/^0+|0+$/g, "");

  let scale = [];
  for (let i = 0; i < bits.length; i) {
    let count = 0;
    if (bits[i] === "1") {
      while (bits[i] === "1") {
        count++;
        i++;
      }
    } else if (bits[i] === "0") {
      while (bits[i] === "0") {
        count++;
        i++;
      }
    }
    scale.push(count);
  }
  scale = Math.min(...scale);

  let bitsArr = [];
  for (let i = 0; i < bits.length; i += scale) {
    bitsArr.push(bits[i]);
  }
  bits = bitsArr.join("");

  const bitToMorse = {
    1: ".",
    11: ".",
    111: "-",
    0: "",
    "00": "",
    "000": " ",
    "0000": " ",
    "00000": " ",
    "000000": " ",
    "0000000": "  ",
  };

  const morseArr = [];
  for (let i = 0; i < bits.length; i++) {
    let morseLetter = bits[i];
    let increment = 0;

    while (morseLetter + bits[i + increment + 1] in bitToMorse) {
      morseLetter = morseLetter + bits[i + increment + 1];
      increment++;
    }

    morseArr.push(bitToMorse[morseLetter]);
    i += increment;
  }

  return morseArr.join("");
}

function decodeMorse(morseCode) {
  const morseArr = morseCode.split(" ");
  const decodeMorse = [];

  for (const word of morseArr) {
    if (word === "") decodeMorse.push(" ");
    else decodeMorse.push(MORSE_CODE[word] || MORSE_CODE[word[0]]);
  }

  return decodeMorse.join("");
}

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."), "HEY JUDE");
console.log(decodeMorse("   .... . -.--   "), "HEY");

// A string containing morse code.
// Return a string containing the converted morse code.

// Remove 0s from beginning and end of bits.
// Determine scale of bits.
// Normalize bits string.
// Convert bits to morse code.
// Convert morse code to English.
