// Refactor messy code by renaming variables and applying helper functions

function compareDateToCurrent(date) {
  const currentDate = new Date()
  const dateDifference = Math.ceil(Math.abs(currentDate.getTime() - date.getTime()) / (1000*60*60*24))
  const dateDifferenceString = date.toDateString()
  return [dateDifference, dateDifferenceString]
}

function compareDates1(dateA, dateB) {
  const [dateADifference, dateADifferenceString] = compareDateToCurrent(dateA)
  const [dateBDifference, dateBDifferenceString] = compareDateToCurrent(dateB)
  if (dateADifference * 2 <= dateBDifference) {
      return `If you thought ${dateADifferenceString} was a long wait, wait until you see how long it is until ${dateBDifferenceString}.`
  } else if (dateADifference < dateBDifference) {
      return `Don't worry, ${dateBDifferenceString} isn't too much farther away than ${dateADifferenceString} in the scheme of things.`
  } else if (dateADifference === dateBDifference) {
      return `They're the same number of days away!`
  } else {
      return `You know ${dateADifferenceString} is closer, right?`
  }
}

function compareDates2(dateA, dateB) {
  const [dateADifference, dateADifferenceString] = compareDateToCurrent(dateA)
  const [dateBDifference, dateBDifferenceString] = compareDateToCurrent(dateB)
  if (dateADifference < dateBDifference) {
      const difference = Math.floor(dateADifference/dateBDifference)
      return `Looks like ${dateBDifferenceString} is ${difference} times farther away than ${dateADifferenceString}.`
  } else if (dateADifference === dateADifference) {
      return `Same exact date there, mate.`
  } else {
      const difference = Math.floor(dateADifference/dateBDifference)
      return `Looks like ${dateADifferenceString} is ${difference} times farther away than ${dateBDifferenceString}.`
  }
}

function compareDates3(dateA, dateB) {
  const [dateADifference, dateADifferenceString] = compareDateToCurrent(dateA)
  const [dateBDifference, dateBDifferenceString] = compareDateToCurrent(dateB)
  const difference = Math.abs(dateADifference - dateBDifference)
  return `You have ${dateADifference} days left until ${dateADifferenceString}, and ${dateBDifference} days left until ${dateBDifferenceString}. There are ${difference} days between them.`
}

const dateA = new Date(2022,09,26)
const dateB = new Date(2022,11,25)
console.log(compareDates3(dateA, dateB))

/* function comp1(a, b) {
  const c = new Date()
  const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000*60*60*24))
  const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000*60*60*24))
  const as = a.toDateString()
  const bs = b.toDateString()
  if (da * 2 <= db) {
      return `If you thought ${as} was a long wait, wait until you see how long it is until ${bs}.`
  } else if (da < db) {
      return `Don't worry, ${bs} isn't too much farther away than ${as} in the scheme of things.`
  } else if (da === db) {
      return `They're the same number of days away!`
  } else {
      return `You know ${as} is closer, right?`
  }
}

function comp2(a, b) {
  const c = new Date()
  const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000*60*60*24))
  const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000*60*60*24))
  const as = a.toDateString()
  const bs = b.toDateString()
  if (da < db) {
      const x = Math.floor(db/da)
      return `Looks like ${bs} is ${x} times farther away than ${as}.`
  } else if (da === db) {
      return `Same exact date there, mate.`
  } else {
      const x = Math.floor(da/db)
      return `Looks like ${as} is ${x} times farther away than ${bs}.`
  }
}

function tot(a, b) {
  const c = new Date()
  const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000*60*60*24))
  const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000*60*60*24))
  const as = a.toDateString()
  const bs = b.toDateString()
  const x = db-da
  return `You have ${da} days left until ${as}, and ${db} days left until ${bs}. There are ${x} days between them.`
} */