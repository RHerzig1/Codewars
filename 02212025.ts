// Create a nickname generator.

const firstname = {
  A: "Alpha",
  B: "Beta",
  C: "Cache",
  D: "Data",
  E: "Energy",
  F: "Function",
  G: "Glitch",
  H: "Half-life",
  I: "Ice",
  J: "Java",
  K: "Keystroke",
  L: "Logic",
  M: "Malware",
  N: "Nagware",
  O: "OS",
  P: "Phishing",
  Q: "Quantum",
  R: "RAD",
  S: "Strike",
  T: "Trojan",
  U: "Ultraviolet",
  V: "Vanilla",
  W: "WiFi",
  X: "Xerox",
  Y: "Y",
  Z: "Zero",
};

const surname = {
  A: "Analogue",
  B: "Bomb",
  C: "Catalyst",
  D: "Discharge",
  E: "Electron",
  F: "Faraday",
  G: "Gig",
  H: "Hacker",
  I: "IP",
  J: "Jabber",
  K: "Killer",
  L: "Lazer",
  M: "Mike",
  N: "n00b",
  O: "Overclock",
  P: "Payload",
  Q: "Quark",
  R: "Roy",
  S: "Spy",
  T: "T-Rex",
  U: "Unit",
  V: "Virus",
  W: "Worm",
  X: "X",
  Y: "Yob",
  Z: "Zombie",
};

function aliasGen(first: string, last: string): string {
  const firstChar = first[0].toUpperCase();
  const lastChar = last[0].toUpperCase();

  if (firstChar < "A" || firstChar > "Z") {
    throw new Error("Your name must start with a letter from A - Z.");
  }

  if (lastChar < "A" || lastChar > "Z") {
    throw new Error("Your name must start with a letter from A - Z.");
  }

  return `${firstname[firstChar]} ${surname[lastChar]}`;
}

console.log(aliasGen("Matthew", "Merritt"), "Malware Mike");
console.log(aliasGen("Duane", "Andie"), "Data Analogue");
console.log(aliasGen("antony", "shanene"), "Alpha Spy");
console.log(aliasGen("123", "Emmanuel"), "Error: Your name must start with a letter from A - Z.");
console.log(aliasGen("Jenessa", "123"), "Error: Your name must start with a letter from A - Z.");
console.log(aliasGen("123", "456"), "Error: Your name must start with a letter from A - Z.");

// first: string. 0 <= string.length <= 25. Consists of uppercase and lowercase English characters. May not be valid.
// last: string. 0 <= string.length <= 25. Consists of uppercase and lowercase English characters. May not be valid.
// Use the provided objects to generate a nickname, or throw an error if not valid.
