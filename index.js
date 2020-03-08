// Code your solutions in this file
function writeCards(message) {
    let newArr = []
    for (let i = 0; i < message.length; i++) {
        newArr.push("Thank you, " + message[i] + ", for the wonderful surprise gift!")
    }
    return newArr
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}

