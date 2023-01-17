// Convert seconds to HH:MM:SS format

function humanReadable (seconds) {
  const SS = seconds % 60
  const MM = Math.floor(seconds / 60 % 60)
  const HH = Math.floor(seconds / 60 / 60)
  const time = [HH, MM, SS].map(elem => {
    if (elem === 0) return '00'
    else if (elem < 10) return '0' + elem
    else return elem
  })

  return time.join(':')
}

console.log(humanReadable(0), '00:00:00')
console.log(humanReadable(59), '00:00:59')
console.log(humanReadable(86399), '23:59:59')


// A number between 0 and 359999.
// Return the time in HH:MM:SS format.