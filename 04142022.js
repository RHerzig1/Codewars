// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
    
function removeEveryOther(arr){
    for (let i = 1; i < arr.length; i++){
        arr.splice(i,1)
    }
    return arr
}

removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])

// P: An array of strings.
// R: The same array, but every odd element removed.
// E: ["Keep", "Remove", "Keep", "Remove", "Keep", ...] -> ["Keep", "Keep", "Keep", ...]
// P: Take an array, use a for loop to remove every other element.