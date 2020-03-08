// Code your solutions in this file

function writeCards(arr_of_names, description) {
    let answer = []
    for (let i = 0; i < arr_of_names.length; i++){
        answer.push(`Thank you, ${arr_of_names[i]}, for the wonderful ${description} gift!`)
        //console.log(`Thank you, ${arr_of_names[i]}, for the wonderful ${description} gift!`)
    }
    return answer
}

function countDown(times_print){
    for (let i = times_print; i >= 0; i--){
        console.log(Number(`${i}`))
    }
}

countDown(4);