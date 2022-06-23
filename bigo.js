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
		if (array[i] === 'nemo') {
			console.log('Found Nemo');
		}
	}
}

findNemo(large);
