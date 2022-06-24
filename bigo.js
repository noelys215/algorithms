const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = [
	'dory',
	'bruce',
	'marlin',
	'nemo',
	'gill',
	'bloat',
	'nigel',
	'squirt',
	'darla',
	'hank',
];
const large = new Array(100).fill('nemo');

function findNemo(array) {
	for (let i = 0; i < array.length; i++) {
		console.log('running');
		if (array[i] === 'nemo') {
			console.log('Found Nemo');
			break;
		}
	}
}

// findNemo(large);

//
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
	let a = 5; // o1
	let b = 10; // 01
	let c = 50; //01
	for (let i = 0; i < input; i++) {
		let x = i + 1; //on
		let y = i + 2; //on
		let z = i + 3; //on
	}
	for (let j = 0; j < input; j++) {
		let p = j * 2; //on
		let q = j * 2; //on
	}
	let whoAmI = "I don't  know"; //01
}

// Big O(4 + 5n)

//log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logPairs(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			console.log([array[i], array[j]]);
		}
	}
}

// logPairs(boxes);

function pairs(boxes) {
	boxes.forEach((box) => boxes.forEach((secondBox) => console.log(box, secondBox)));
}

pairs(boxes);
