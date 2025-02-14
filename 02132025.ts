// Create a LZ78 encoder.

function encoder(data): string {
  const cache = new Map<string, number>([["", 0]]);
  const map = new Map<number, string[]>();
  let str = "";

  for (let i = 0; i < data.length; i++) {
    str = str + data[i];

    if (!cache.has(str)) {
      // Cache str and index
      cache.set(str, cache.size);

      // Create the token and add it to the final map
      const subStrBeginning = str.slice(0, -1); // subStrBeginning is the last non-unique version of str (i.e. str without the last character)
      const subStrEnd = data[i];
      const subStrIndex = cache.get(subStrBeginning);
      const token = [subStrIndex, subStrEnd];
      map.set(map.size, token);

      // Reset str for next token
      str = "";
    }
  }

  if (str) {
    // Create the token and add it to the final map
    const subStr = str;
    const subStrIndex = cache.get(subStr);
    const token = [String(subStrIndex)];
    map.set(map.size, token);
  }

  let result = "";

  for (const [prop, arr] of map) {
    result = result + arr.join("");
  }

  return result;
}

console.log(encoder("ABAABABAABAB") === "0A0B1A2A4A4B");
console.log(encoder("ABAABABAABABAA") === "0A0B1A2A4A4B3");
console.log(encoder("ABBCBCABABCAABCAABBCAA") === "0A0B2C3A2A4A6B6");
console.log(encoder("AAAAAAAAAAAAAAA") === "0A1A2A3A4A");
console.log(encoder("ABCABCABCABCABCABC") === "0A0B0C1B3A2C4C7A6");
console.log(encoder("ABCDDEFGABCDEDBBDEAAEDAEDCDABC") === "0A0B0C0D4E0F0G1B3D0E4B2D10A1E4A10D9A2C");

// data: string. 1 <= string.length <= 1000. Contains upper case alphabetical characters.
// Return the LZ78 encryption and decryption of data.

// https://www.codewars.com/kata/5db42a943c3c65001dcedb1a