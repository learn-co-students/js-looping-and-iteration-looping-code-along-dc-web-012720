// Code your solutions in this file
let name = ["Ada", "Brendan", "Ali"]
let day = "birthday";

function writeCards(name, day){
	let arr = []
	for (let i = 0; i < name.length; i++){
		arr.push(`Thank you, ${name[i]}, for the wonderful ${day} gift!`)
	}
	return arr
}


let number = 10
function countDown(number){
	while(number > 0 ){
		console.log(number);
		number -= 1;
	}
	console.log(number);
}