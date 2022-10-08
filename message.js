function replaceCharacters(message) {
    const characters = ['O', 'I', 'Z', 'E', 'h', 'S', 'G', 'L', 'B', 'q']
    message = [...message]
    for (let i = 0; i < message.length; i++) {
        if (characters.includes(message[i])) {
            message[i] = characters.indexOf(message[i])
        }
        else if (Number(message[i])) {
            message[i] = characters[message[i]]
        }
    }
    return message.join('')
}

function cleanString(message) {
    message = message.slice(message.indexOf('c') + 1)
    while (message.indexOf('Eek!') >= 0) {
        message = message.slice(0, message.indexOf('Eek!')) + message.slice(message.indexOf('Eek!') + 4)
    }
    return [...message].reverse().join('')
}

function replaceCharactersWithSpaces(message, ...rest) {
    if (rest.length === 0) rest = ['S', 'p', 'a', 'c', 'e']
    for (let key of rest) {
        message = message.replaceAll(key, ' ')
    }
    return message
}

function reverseString(message) {
    return [...message].reverse().join('')
}


function reduceString(message) {
    message = message.split(',')
    reducedString = []
    for (let i = 0; i < message.length; i++) {
        if (message[i] != message[i].trim()) { }
        else if (message[i].toLowerCase().includes("dog") || message[i].toLowerCase().includes("bark") || message[i].toLowerCase().includes("bone")) { }
        else if (message[i].length % 5 === 0) { }
        else if ((message[i].charCodeAt(0) + message[i].charCodeAt(message[i].length - 1)) % 2 === 0) { }
        else if (message[i][Math.ceil(message[i].length / 2)] === 'e') { }
        else if (message[i].split('').filter(elem => elem >= 'a' && elem <= 'z').length % 2 === 1) { }
        else if (message[i].split('').filter(elem => elem >= 'A' && elem <= 'Z').length < 2) { }
        else if (message[i].includes('S')) { }
        else reducedString.push(message[i])
    }

    return reducedString.join(', ')
}

function removeCharacters(message, integer = 3) {
    message = [...message]
    const result = []
    for (let i = 0; i < message.length; i++) {
        if ((i + 1) % integer != 0) {
            result.push(message[i])
        }
    }
    return result.join('')
}


let key = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
key = replaceCharacters(key)
// key = cleanString(key)
key = replaceCharactersWithSpaces(key)
key = reverseString(key)
// key = reduceString(key)
key = removeCharacters(key)

console.log(key)