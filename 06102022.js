// A bookstore is calculating the number of books they have in each catagory using the catagory codes. Each catagory code starts with a capitalized character, followed by more capital characters, a space, and then the number of books in that catagory. Add the books together that start with the same character and return the sums for each requested catagory.

function stockList(listOfArt, listOfCat){
  
  const listOfCatObject = {}
  let listOfCatString = ''

  listOfArt = listOfArt.join(' ').split(' ')
  listOfCat.forEach(elem => {
    listOfCatObject[elem] = 0
  })
  
  for (let i = 0; i < listOfArt.length;  i++) {
    if (listOfCatObject.hasOwnProperty(listOfArt[i][0])) {
      listOfCatObject[listOfArt[i][0]] += +listOfArt[i + 1]
    }
  }

  if (Object.values(listOfCatObject).every(elem => elem == 0)) {
    return listOfCatString
  }
  
  for (let i = 0; i < Object.keys(listOfCatObject).length; i++) {
    if (i == Object.keys(listOfCatObject).length - 1) {
      listOfCatString += `(${Object.keys(listOfCatObject)[i]} : ${Object.values(listOfCatObject)[i]})`
    }
    else {
      listOfCatString += `(${Object.keys(listOfCatObject)[i]} : ${Object.values(listOfCatObject)[i]}) - `
    }
  }
  
  return listOfCatString
}

// Two arrays. First is a total list of books and the second is a list of catagories to return.
// Return the sums of each catagory as a string.
// listOfArt = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
// listOfCat = ["A", "B"]
// return "(A : 200) - (B : 1140)"
// Use the split() method to split listOfArt catagory and integers into seperate elements. Even indexes will represent catagories, odd will represent the number of books.
// Assign variables to each listOfCat element with the value of 0.
// Iterate through listOfArt using a For loop. If the element begins with a letter that listOfCat also contains, then add i + 1 to the value.
// Use the template literal to format the final string, and return. 