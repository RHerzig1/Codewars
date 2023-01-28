// Write an algorithm that takes seconds and converts them to a string containing seconds, minutes, hours, days, and years

function formatDuration(seconds) {
  if (seconds === 0) return 'now'

  const timeMap = {
    second: false,
    minute: false,
    hour: false,
    day: false,
    year: false,
    set setTime([time, unit]) {
      if (time >= 1) this[unit] = `${time} ${time === 1 ? unit : unit + 's'}`
    },
  }

  timeMap.setTime = [seconds % 60, 'second']
  timeMap.setTime = [Math.floor(seconds / 60 % 60), 'minute']
  timeMap.setTime = [Math.floor(seconds / 60 / 60 % 24), 'hour']
  timeMap.setTime = [Math.floor(seconds / 60 / 60 / 24 % 365), 'day']
  timeMap.setTime = [Math.floor(seconds / 60 / 60 / 24 / 365), 'year']

  const timeArr = []
  for (const prop in timeMap) {
    if (timeMap[prop]) timeArr.push(timeMap[prop])
  }
  
  if (timeArr.length === 1) return timeArr[0]
  return timeArr.reverse().slice(0, timeArr.length - 1).join(', ') + ' and ' + timeArr[timeArr.length - 1]
}

console.log(formatDuration(15731080), '182 days, 1 hour, 44 minutes and 40 seconds')
console.log(formatDuration(1), '1 second')
console.log(formatDuration(0), 'now')