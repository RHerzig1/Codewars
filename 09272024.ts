// Convert the temperature.

function convertTemperature(celsius: number): number[] {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32.0;
  return [kelvin, fahrenheit];
}

console.log(convertTemperature(36.50), [309.65000, 97.70000]);
console.log(convertTemperature(122.11), [395.26000, 251.79800]);
// https://leetcode.com/problems/convert-the-temperature/

// celsius: number. 0 <= celsius <= 1000. Rounded to two decimal places.
// Return the parameter converted into [kelvin, fahrenheit].
