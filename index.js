// Code your solutions in this file

function writeCards(arr, noun) {
	let i = 0;
	let thankyoucard = [];
	while (i < arr.length) {
		thankyoucard.push(`Thank you, ${arr[i]}, for the wonderful ${noun} gift!`);
		i++;
	}
	return thankyoucard;
}

function countDown(num) {
	while (num > 0) {
		console.log(num);
		num -= 1;
	}
	console.log(num);
}
