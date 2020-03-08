let arr = []

function writeCards(names, event){
  for (let i = 0; i < names.length; i++){
    arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return arr;
}

function countDown(number){
  let i = number;
  while (i >= 0){
    console.log(i);
    i--;
  }
}