// Calculate catch up time in race
// Two animals are racing. The first has a speed of v1, while the second has a speed of v2 and a lead of g. If v1 < v2, how long will it take to catch up?

function race(v1, v2, g) {
  const t = v2 - v1
  return t > 0 ? calculateTime(t, g) : null
}

function calculateTime(t, g) {
  const result = Array(3).fill(0)
  t = g * 3600 / t
  result[0] = t / 3600
  result[1] = t % 3600 / 60
  result[2] = t % 60
  return result.map(Math.floor)
}

// Parameters are v1, v2, and g. All are positive integers.
// Return an array of integers in [hour, min, sec] format. If v1 >= v2, return null.
// (80, 100, 40) -> [2, 0, 0]
// Subtract v1 from v2.
// If the result is less than or equal to 0, return null. Otherwise, run calculateTime(t, g).
// In the new function, create an array.
// Calculate the results for [hour, min, sec].
// Round down to the nearest whole number and return.