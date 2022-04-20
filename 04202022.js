// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.
// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.
// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:
// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

function magNumber(info){
    if (info[0] === 'PT92'){
        return Math.ceil(info[1] * 3 / 17)
    }
    else if (info[0] === 'M4A1'){
        return Math.ceil(info[1] * 3 / 30)
    }
    else if (info[0] === 'M16A2'){
        return Math.ceil(info[1] * 3 / 30)
    }
    else if (info[0] === 'PSG1'){
        return Math.ceil(info[1] * 3 / 5)
    }
}

magNumber(["PT92", 6])

// P: An array containing a weapon name string and a number used to calculate the amount of ammo needed.
// R: Return an integer of the number of bullets needed, round up to fill the magazine.
// E: magNumber(["PT92", 6]) -> 2 
// P: Take the aray, use conditionals to isolate the string for magNumber[0], then calculate (magNumber[1] * 3 / # of bullets in the magazine, round to ceiling, and return.