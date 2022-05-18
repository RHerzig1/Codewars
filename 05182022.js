// YYou will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising. Write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins.

function findAdmin(list, lang) {
  const filteredList = []
  for (let key of list) {
    if (key.language === lang && key.githubAdmin === 'yes') {
      filteredList.push(key)
    }
  }
  return filteredList
}

function findAdmin(list, lang) {
  const filteredList = []
  list.forEach(key => {
    if (key.language === lang && key.githubAdmin === 'yes') {
      filteredList.push(key)
    }
  })
  return filteredList
}

function findAdmin(list, lang) {
  const filteredList = []
  for (let i = 0; i < list.length; i++){
    if (list[i].language === lang && list[i].githubAdmin === 'yes') {
      filteredList.push(list[i])
    }
  }
  return filteredList
}

function findAdmin(list, lang) {
  const filteredList = []
  for (let key of list) {
    (key.language === lang && key.githubAdmin === 'yes' ? filteredList.push(key) : filteredList)
  }
  return filteredList
}

function findAdmin(list, lang) {
  return list.filter(p => p.language === lang && p.githubAdmin === 'yes');
}

// An array of objects.
// An array consisting of all the objects where language === 'JavaScript' and githubAdmin === 'yes'.
// Assign a new array to fold the filteredList. Loop through the provided array of objects. If language === 'JavaScript' and githubAdmin === 'no', add that object to filteredList. Return filteredList.

// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript