// Write a function that converts a year into a century.

function whatCentury(year) {
  const suffixes = {
    1: "st",
    2: "nd",
    3: "rd",
    11: "th",
    12: "th",
    13: "th",
  };

  const century = Math.ceil(year / 100);
  const suffix = suffixes[String(century)] || suffixes[String(century)[1]] || "th";
  return `${century}${suffix}`;
}

console.log(whatCentury(1000), "10th");
console.log(whatCentury(1200), "12th");
console.log(whatCentury(1500), "15th");
console.log(whatCentury(1999), "20th");
console.log(whatCentury(2023), "21st");
console.log(whatCentury(2100), "21st");
console.log(whatCentury(2200), "22nd");
console.log(whatCentury(2300), "23rd");
console.log(whatCentury(2400), "24th");

// A integer between 1000 and 9999. Always a valid number.
// Return a string representing the century of the provided number.

// Create a cache of suffixes.
// Divide the year by 100 and round up.
// Add the correct suffix and return.