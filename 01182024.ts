// Write a function that calculates who had the most birthdays on a Saturday or Sunday.

export function mostWeekendBirthdays(friends: string[][], conversationDate: string | Date) {
  friends = friends.sort((a, b) => {
    const dateA: any = new Date(a[1]);
    const dateB: any = new Date(b[1]);
    return dateA - dateB;
  });
  conversationDate = new Date(conversationDate);

  const numberOfDays: { [index: string]: string[][] } = {};

  for (const friend of friends) {
    let date = new Date(friend[1]);
    date = new Date(date.setFullYear(date.getFullYear() + 1));
    let count = 0;

    while (date <= conversationDate) {
      const day = date.getDay();
      date = new Date(date.setFullYear(date.getFullYear() + 1));

      if (day === 0 || day === 6) {
        count++;
      }
    }

    numberOfDays[count] = (numberOfDays[count] || []).concat(friend);
  }

  let days = 0;
  let friend: null | string[] = null;

  for (const number in numberOfDays) {
    if (Number(number) >= days) {
      friend = numberOfDays[number][0];
    }
  }

  return friend;
}

console.log(
  mostWeekendBirthdays(
    [
      ["Alice", "2010-11-10"],
      ["Bob", "2010-11-23"],
    ],
    "2022-12-31"
  ),
  "Alice"
);
console.log(
  mostWeekendBirthdays(
    [
      ["Steve", "2010-11-18"],
      ["Dave", "2010-11-22"],
    ],
    "2022-12-31"
  ),
  "Dave"
);

// friends: string[][]. Each nested array will contain the name of the friend, and their birthday as YYYY-MM-DD. Order is random. 0 <= array.length <= 100. Always valid.
// conversationDate: string. representing the inclusive end date in YYYY-MM-DD.
// Return a string containing the name of the person with the most birthdays on a weekend. Do not count the date of their birth. If they're born on a leap year, use 02-28 on nonleap years. In the case of a tie, return the name of the youngest friend.

// Sort friends youngest to oldest.
// Declare a cache called numberOfdays.
// Calculate the number of birthdays for each friend and push to cache. Property is the number of days on weekend. Value is an array of friends.
// Iterate through the cache and return the name with the most birthdays.
