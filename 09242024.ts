// Calculate boredom score in the office.

function boredom(staff: { [key: string]: string }): string {
  const departments = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };

  let score = 0;

  for (const employee in staff) {
    const department = staff[employee];
    score += departments[department as keyof typeof departments] || 0;
  }

  if (score <= 80) {
    return "kill me now";
  } else if (score < 100) {
    return "i can handle this";
  } else {
    return "party time!!";
  }
}

// https://www.codewars.com/kata/57ed4cef7b45ef8774000014/

// staff: Object[key: string]: string. Contains names and their deparment.
// Count the cumulative "score" of the departments and then return the requested string.
