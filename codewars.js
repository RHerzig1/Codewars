// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

function isVow(a){
    for (let i = 0; i < a.length; i++){
        if (a[i] === 097){
            a[i] = 'a'
        }
        else if (a[i] === 101){
            a[i] = 'e'
        }
        else if (a[i] === 105){
            a[i] = 'i'
        }
        else if (a[i] === 111){
            a[i] = 'o'
        }
        else if (a[i] === 117){
            a[i] = 'u'
        }
    }
    
    return a
}
    
    // P: Array of numbers
    // R: Return the array with numbers changed to corrisponding vowels
    // E: [101,121] => ["e",121]
    // P: Take an array, find the numbers that correspond to vowels, replace the numbers with the respective vowel string, return the updated array.
    
    // a	097
    // e	101
    // i	105
    // o	111
    // u	117