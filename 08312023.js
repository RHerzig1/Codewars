// Write a function that returns the time based off the angle of the hour hand.

function findTime(num) {
  let hour = String(Math.floor(num / 30) || 12);
  hour = hour < 10 ? `0${hour}` : hour;
  let minute = String(Math.floor((num * 2 % 60)))
  minute = minute < 10 ? `0${minute}` : minute;
  return `${hour}:${minute}`;
}

console.log(findTime(0), '12:00')
console.log(findTime(90), '03:00')
console.log(findTime(180), '06:00')
console.log(findTime(270), '09:00')
console.log(findTime(360), '12:00')
console.log(findTime(137), '04:34')
console.log(findTime(311), '10:22')

// An integer >= 0 representing the angle of the hour hand. Always valid.
// Return the time if angle 0 = 12:00.