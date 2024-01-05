// Write a function that returns the most frequently appearing day of the week of a given year.

function mostFrequentDays(num) {
  const counts = Array(7).fill(0);

  let date = new Date(`${num}-01-01`);
  const maxDate = new Date(`${num + 1}-01-01`);
  while (date < maxDate) {
    const dayOfWeek = date.getDay();
    counts[dayOfWeek] += 1;
    date.setDate(date.getDate() + 1);
  }

  const days = {
    Monday: counts[1],
    Tuesday: counts[2],
    Wednesday: counts[3],
    Thursday: counts[4],
    Friday: counts[5],
    Saturday: counts[6],
    Sunday: counts[0],
  };

  let result = [];

  for (const day in days) {
    if ((days[result[0]] ?? 0) < days[day]) {
      result = [day];
    } else if (days[result[0]] === days[day]) {
      result.push(day);
    }
  }

  return result;
}

console.log(mostFrequentDays(1794), ["Wednesday"]);
console.log(mostFrequentDays(1901), ["Tuesday"]);
console.log(mostFrequentDays(1910), ["Saturday"]);
console.log(mostFrequentDays(1968), ["Monday", "Tuesday"]);
console.log(mostFrequentDays(1984), ["Monday", "Sunday"]);

// An integer. Always a valid number. 1583 <= number <= 4000.
// Return an array containing the most common day(s) of the week. Sort tie days starting with Monday.

// Create a cache array containing seven 0s. Index represents a day of week starting with Sunday.
// Iterate from Jan 1st to Dec 31st of the year and increment the respetive days.
// Create a cache object of each day equal to the corresponding element of the array.
// Iterate and return the max element(s) as an array.
