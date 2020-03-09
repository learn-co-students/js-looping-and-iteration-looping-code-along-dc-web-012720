// Code your solutions in this file
function countDown(x) {
while (x >= 0) {
    console.log(x);
    x--
  }
}

function writeCards(names) {
    let arr = []
    for (let i=0; i<names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return arr
}