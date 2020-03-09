// Code your solutions in this file
function writeCards(names, adj) {
    let array = []

    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${adj} gift!`)
    }
    return array;
}


function countDown(int) {
    let i = int;

    while (i >= 0) {
        console.log(i)
        i--;
    }
}