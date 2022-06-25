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

// pairs(boxes);

// Space Complexity

function boo(n) {
	for (let i = 0; i < n.length; i++) {
		console.log('boooo');
	}
}

boo([1, 2, 3, 4, 5]); // O(1)

function arrayOfHiNTimes(n) {
	let hiArray = [];
	for (let i = 0; i < n; i++) {
		hiArray[i] = 'hi';
	}
	console.log(hiArray);
}

arrayOfHiNTimes(6); //O(n)

const array = ['hi', 'bye', 'see ya'];

//Interview Example

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

function containsCommonItem(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				return true;
			}
		}
	}
	return false;
}

//O(a*b)
//O(1) - Space Complexity

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem2(arr1, arr2) {
	// loop through first array and create object where properties === items in the array
	// can we assume always 2 params?

	let map = {};
	for (let i = 0; i < arr1.length; i++) {
		if (!map[arr1[i]]) {
			const item = arr1[i];
			map[item] = true;
		}
	}
	// loop through second array and check if item in second array exists on created object.
	for (let j = 0; j < arr2.length; j++) {
		if (map[arr2[j]]) {
			return true;
		}
	}
	return false;
}

//O(a + b) Time Complexity
//O(a) Space Complexity

// containsCommonItem2(array1, array2)

function containsCommonItem3(arr1, arr2) {
	return arr1.some((item) => arr2.includes(item));
}

containsCommonItem(array1, array2);
containsCommonItem2(array1, array2);
containsCommonItem3(array1, array2);
