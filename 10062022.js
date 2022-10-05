// Reduce a string using the provided criteria.

function reduceString(message) {
  message = message.split(',')
  reducedString = []
  for (let i = 0; i < message.length; i++) {
    if (message[i] != message[i].trim()) {}
    else if (message[i].toLowerCase().includes("dog") || message[i].toLowerCase().includes("bark") || message[i].toLowerCase().includes("bone")) {}
    else if (message[i].length % 5 === 0) {}
    else if ((message[i].charCodeAt(0) + message[i].charCodeAt(message[i].length - 1)) % 2 === 0) {}
    else if (message[i][Math.ceil(message[i].length / 2)] === 'e') {}
    else if (message[i].split('').filter(elem => elem >= 'a' && elem <= 'z').length % 2 === 1) {}
    else if (message[i].split('').filter(elem => elem >= 'A' && elem <= 'Z').length < 2) {}
    else if (message[i].includes('S')) {}
    else reducedString.push(message[i])
  }

  return reducedString.join(', ')
}

reduceString("The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
)

// The parameter is a non-empty string containing letters, spaces, and numbers. It's a series of names seperate by commas.
// Return the string after reducing it:
  // Remove names that start or end with an empty space.
  // Remove names that contain uppercase or lowercase "dog", "bark", or "bone".
  // Total length cannot be a multiple of 5.
  // The sum of charcodes for the 1st and last characters must be odd.
  // The character after the middle character (or latter-middle if even number of characters) may not be an 'e'.
  // Must have an even number of lowercase characters.
  // Must have at least 2 capital letters.
  // May not contain a capital 'S'.
// Split the message.
// Declare a results array.
// Iterate through the array.
// Test for each condition. If the element passes each test, push it to the results array.
// Join the results array and return it.