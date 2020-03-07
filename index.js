// Code your solutions in this file

let newArr = []

function writeCards(array, event) {
    for (let i=0; i<array.length; i+=1) {
        newArr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return newArr
}

function countDown(num) {
    let i = 0
    while (i <= num) {
        console.log(num)
        num -= 1
    }
}