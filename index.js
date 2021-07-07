function writeCards(nameArray, event) {
    let finalArray = []
    for (let i = 0; i < nameArray.length; i++) {
        finalArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
    }
    return finalArray
}

function countDown(number) {
    let i = number 
    while (i > -1) {
        console.log(i)
        i--
    }
}