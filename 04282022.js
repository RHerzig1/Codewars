// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

// function usdcny(usd) {
//   let value = usd
//   value = (value * 6.75).toFixed(2)
//   return value + ' Chinese Yuan'
// }

// usdcny(15)

const usdcny = usd => (usd * 6.75).toFixed(2) + ' Chinese Yuan'

// P: A single integer, the value in US dollars to be converted.
// R: An floating number, up to 2 decimal places, ending in in string 'Chinese Yuan'.
// E: 15  -> '101.25 Chinese Yuan'
// P: Take the parameter and multiply it by 6.75. Find a method that will force it to 2 decimal places, including 0s if applicable. Return the converted value with the string 'Chinese Yuan' at the end. Update: The toFixed() method controls decimal places. Put the number of places, in this case 2, inside the paranthesis: toFixed(2)