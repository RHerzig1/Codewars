// Create a LZ78 decoder.

function decoder(data): string {
  let deconstructedData = data.match(/\d+[A-Za-z]|(\d+)$/g) || [];

  deconstructedData = deconstructedData.map((elem) => {
    const number = Number.parseFloat(elem);
    const letters = elem.match(/[A-Za-z]+/) || [""];
    return [number, ...letters];
  });

  const cache = new Map<number, string>([[0, ""]]);

  for (const [index, str] of deconstructedData) {
    cache.set(cache.size, cache.get(Number(index)) + str);
  }

  let result = "";

  for (let [prop, str] of cache) {
    if (typeof str === "undefined") {
      result = result + cache.get(prop);
    } else {
      result = result + str;
    }
  }

  return result;
}

console.log(decoder("0A0B1A2A4A4B") === "ABAABABAABAB");
console.log(decoder("0A0B1A2A4A4B3") === "ABAABABAABABAA");
console.log(decoder("0A0B2C3A2A4A6B6") === "ABBCBCABABCAABCAABBCAA");
console.log(decoder("0A1A2A3A4A") === "AAAAAAAAAAAAAAA");
console.log(decoder("0A0B0C1B3A2C4C7A6") === "ABCABCABCABCABCABC");
console.log(decoder("0A0B0C0D4E0F0G1B3D0E4B2D10A1E4A10D9A2C") === "ABCDDEFGABCDEDBBDEAAEDAEDCDABC");

// data: string. 1 <= string.length <= 1000. Contains upper case alphabetical characters.
// Return the LZ78 encryption and decryption of data.

// https://www.codewars.com/kata/5db42a943c3c65001dcedb1a
