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


let key = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
key = replaceCharacters(key)
key = cleanString(key)
key = replaceCharactersWithSpaces(key)
key = reverseString(key)

console.log(key)