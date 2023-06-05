// Write an algorithm that converts binary to Morse code.

function decodeBitsAdvanced(bits) {
  // Trim 0s from start/end
  bits = bits.replace(/^0+|0+$/g, "");

  // Empty bits edge cases
  if (bits.length === 0 || bits === "0") return "";

  // Calculate min and max lengths of repeating binary
  const scale = [];
  let count = 1;

  for (let i = 0; i < bits.length; i += count) {
    count = 1;
    while (bits[i] === bits[i + count]) {
      count++;
    }
    scale.push(count);
  }

  const min = Math.min(...scale);
  const max = Math.max(...scale);

  // Morse code constants
  const shortGap = 3;
  const longGap = 7;

  // Calculate gap size
  const unit = (max / longGap + min) / 2;
  const letter = Math.round(shortGap * unit);
  const word = Math.floor(longGap * unit);

  // Convert binary to morse code using gap sizes
  const morseArr = [];
  count = 1;

  for (let i = 0; i < bits.length; i += count) {
    count = 1;
    while (bits[i] === bits[i + count]) {
      count++;
    }

    if (count >= word && bits[i] === "0") {
      morseArr.push(" / ");
    } else if (count >= letter && bits[i] === "1") {
      morseArr.push("-");
    } else if (count >= letter && bits[i] === "0") {
      morseArr.push(" ");
    } else if (bits[i] === "1") {
      morseArr.push(".");
    } else if (bits[i] === "0") {
      morseArr.push("");
    }
  }

  return morseArr.join("");
}

function decodeMorse(morseCode) {
  const morseArr = morseCode.split(" ");
  const decodeMorse = [];

  for (const word of morseArr) {
    if (word === "/") decodeMorse.push(" ");
    else decodeMorse.push(MORSE_CODE[word]);
  }

  return decodeMorse.join("");
}

// A string containing 0s and 1s.
// Convert to Morse code, then use the Morse code object to convert to English and return as a string.