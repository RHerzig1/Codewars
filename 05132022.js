// Write a function that takes in a particular time as 24h format ('hh:mm:ss') and outputs a string that reproduces the Berlin Clock.

function berlinClock(time) {
  time = time.split(':')
  let seconds = (time[2] % 2 === 0 ? 'Y' : 'O')

  let hours = findHours()
  function findHours() {
    if (Math.floor(time[0] / 5) === 0) {
      hoursTop = 'OOOO'
      hoursSubtract = 0
    }
    else if (Math.floor(time[0] / 5) === 1) {
      hoursTop = 'ROOO'
      hoursSubtract = 5
    }
    else if (Math.floor(time[0] / 5) === 2) {
      hoursTop = 'RROO'
      hoursSubtract = 10
    }
    else if (Math.floor(time[0] / 5) === 3) {
      hoursTop = 'RRRO'
      hoursSubtract = 15
    }
    else {
      hoursTop = 'RRRR'
      hoursSubtract = 20
    }

    if (Math.floor(time[0] - hoursSubtract) === 0) {
      hoursBottom = 'OOOO'
    }
    else if (Math.floor(time[0] - hoursSubtract) === 1) {
      hoursBottom = 'ROOO'
    }
    else if (Math.floor(time[0] - hoursSubtract) === 2) {
      hoursBottom = 'RROO'
    }
    else if (Math.floor(time[0] - hoursSubtract) === 3) {
      hoursBottom = 'RRRO'
    }
    else if (Math.floor(time[0] - hoursSubtract) === 3) {
      hoursBottom = 'RRRO'
    }
    else {
      hoursBottom = 'RRRR'
    }

    return `${hoursTop}\n${hoursBottom}`
  }

  let minutes = findMinutes()
  function findMinutes() {
    if (Math.floor(time[1] / 5) === 0) {
      secondsTop = 'OOOOOOOOOOO'
      secondsSubtract = 5 * (Math.floor(time[1] / 5))
    }
    else if (Math.floor(time[1] / 5) === 1) {
      secondsTop = 'YOOOOOOOOOO'
      secondsSubtract = 5 * (Math.floor(time[1] / 5))
    }
    else if (Math.floor(time[1] / 5) === 2) {
      secondsTop = 'YYOOOOOOOOO'
      secondsSubtract = 5 * (Math.floor(time[1] / 5))
    }
    else if (Math.floor(time[1] / 5) === 3) {
      secondsTop = 'YYROOOOOOOO'
      secondsSubtract = 5 * (Math.floor(time[1] / 5))
    }
    else if (Math.floor(time[1] / 5) === 4) {
      secondsTop = 'YYRYOOOOOOO'
      secondsSubtract = 5 * (Math.floor(time[1] / 5))
    }
    else if (Math.floor(time[1] / 5) === 5) {
      secondsTop = 'YYRYYOOOOOO'
      secondsSubtract = 5 * (Math.floor(time[1] / 5))
    }
    else if (Math.floor(time[1] / 5) === 6) {
      secondsTop = 'YYRYYROOOOO'
      secondsSubtract = 5 * (Math.floor(time[1] / 5))
    }
    else if (Math.floor(time[1] / 5) === 7) {
      secondsTop = 'YYRYYRYOOOO'
      secondsSubtract = 5 * (Math.floor(time[1] / 5))
    }
    else if (Math.floor(time[1] / 5) === 8) {
      secondsTop = 'YYRYYRYYOOO'
      secondsSubtract = 5 * (Math.floor(time[1] / 5))
    }
    else if (Math.floor(time[1] / 5) === 9) {
      secondsTop = 'YYRYYRYYROO'
      secondsSubtract = 5 * (Math.floor(time[1] / 5))
    }
    else if (Math.floor(time[1] / 5) === 10) {
      secondsTop = 'YYRYYRYYRYO'
      secondsSubtract = 5 * (Math.floor(time[1] / 5))
    }
    else {
      secondsTop = 'YYRYYRYYRYY'
      secondsSubtract = 5 * (Math.floor(time[1] / 5))
    }

    if (Math.floor(time[1] - secondsSubtract) === 0) {
      secondsBottom = 'OOOO'
    }
    else if (Math.floor(time[1] - secondsSubtract) === 1) {
      secondsBottom = 'YOOO'
    }
    else if (Math.floor(time[1] - secondsSubtract) === 2) {
      secondsBottom = 'YYOO'
    }
    else if (Math.floor(time[1] - secondsSubtract) === 3) {
      secondsBottom = 'YYYO'
    }
    else {
      secondsBottom = 'YYYY'
    }

    return `${secondsTop}\n${secondsBottom}`
  }

  return `${seconds}\n${hours}\n${minutes}`
}

berlinClock("12:56:01")

// A string of integers in "hh:mm:ss" format.
// A string corresponding with the berlin clock format.
// "12:56:01" -> "O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO"

// https://www.codewars.com/kata/5a1463678ba9145a670000f9/train/javascript