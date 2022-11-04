// Calculate total milliseconds from provided hours, minutes, and seconds

function past(h, m, s){
  let ms = 0
  ms += s * 1000
  ms += m * 60000
  ms += h * 3.6e+6
  return ms
}

// Hour, minute, and seconds
// Return the total number of milliseconds
// Declare a ms variable equal to 0
// Calcuate total number of milliseconds from each parameter.
// Add them to ms.
// Return sum.