// Write a function that returns a chore schedule so each person does equal chores throughout the month.

function guardChoosing(names) {
  const scores = {};
  for (const name of names) {
    scores[name] = 0;
  }

  const schedule = {};
  for (let i = 1; i <= 30; i++) {
    schedule[i] = null;
  }

  const weekendDates = [6, 7, 13, 14, 20, 21, 27, 28];
  const fridayDates = [5, 12, 19, 26];
  const weekDates = [1, 2, 3, 4, 8, 9, 10, 11, 15, 16, 17, 18, 22, 23, 24, 25, 29, 30];

  while (
    weekendDates.length > 0 ||
    fridayDates.length > 0 ||
    weekDates.length > 0
  ) {
    let min = names[0];

    for (const name in scores) {
      if (scores[name] < scores[min]) {
        min = name;
      }
    }

    let points = null;
    let scheduleDay = null;

    if (weekendDates.length > 0) {
      for (const date of weekendDates) {
        if (schedule[date] === null) {
          points = 2;
          scheduleDay = date;
          weekendDates.shift();
          break;
        }
      }
    } else if (fridayDates.length > 0) {
      for (const date of fridayDates) {
        if (schedule[date] === null) {
          points = 1.5;
          scheduleDay = date;
          fridayDates.shift();
          break;
        }
      }
    } else if (weekDates.length > 0) {
      for (const date of weekDates) {
        if (schedule[date] === null) {
          points = 1;
          scheduleDay = date;
          weekDates.shift();
          break;
        }
      }
    }

    scores[min] += points;
    schedule[scheduleDay] = min;
  }

  return Object.values(schedule);
}

console.log(guardChoosing(["a1"]), []);
console.log(guardChoosing(["a1", "a2"]), []);
console.log(guardChoosing(["a1", "a2", "a3"]), []);

// An array of strings. Each string represents a name. Length > 0 and < 30. Always valid.
// Return an array with a length of 30. Elements should be the names provided in the parameter. Using the day chart, each person should have similar chore scores for the month.
// Mon - Thu = 1
// Fri = 1.5
// Sat - Sun = 2

// Create an object to hold the score for each person.
// Declare an array to hold the schedule.
// While the array has a length < 30, assign the lowest score a chore.
// Add points to the object using modulus.
// Return the array.
