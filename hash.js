// insert O(1)
// delete O(1)
// lookup O(1)
// search O(1)

let user = {
	age: 14,
	name: 'Asuka',
	pilot: 'true',
	scream: function () {
		console.log('Baka Shinji!');
	},
};

//
class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	}

	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}

	keys() {
		if (!this.data.length) {
			return undefined;
		}
		let result = [];
		// loop through all the elements
		for (let i = 0; i < this.data.length; i++) {
			// if it's not an empty memory cell
			if (this.data[i] && this.data[i].length) {
				// but also loop through all the potential collisions
				if (this.data.length > 1) {
					for (let j = 0; j < this.data[i].length; j++) {
						result.push(this.data[i][j][0]);
					}
				} else {
					result.push(this.data[i][0]);
				}
			}
		}
		return result;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.set('kiwis', 13);
myHashTable.get('apples');

//
function firstRepeatChar(input) {
	let map = {};

	for (let i = 0; i < input.length; i++) {
		if (map[input[i]] !== undefined) {
			return input[i];
		} else {
			map[input[i]] = i;
		}
	}
	return undefined;
}

//
function hash(key, arrayLen) {
	let total = 0;
	let WEIRD_PRIME = 31;

	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		let value = char.charCodeAt(0) - 96;
		total = (total * WEIRD_PRIME + value) % arrayLen;
	}
	console.log(total);
}

//
class HashTables {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {
		let index = this._hash(key);
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
	}

	get(key) {
		let index = this._hash(key);
		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index[i][0]] === key) {
					return this.keyMap[index][i][1];
				}
			}
		}
		return undefined;
	}

	values() {
		let valuesArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!valuesArr.includes(this.keyMap[i][j][1])) {
						valuesArr.push(this.keyMap[i][j][1]);
					}
				}
			}
		}
		return valuesArr;
	}

	keys() {
		let keysArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!keysArr.includes(this.keyMap[i][j][0])) {
						keysArr.push(this.keyMap[i][j][0]);
					}
				}
			}
		}
		return keysArr;
	}
}

let ht = new HashTables(17);
ht.set('maroon', '#800000');
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');

// console.log(ht.keys());

//
let map = new Map();

map.set('Asuka', 'JavaScript');
map.set('Shinji', 'C#');
map.set('Rei', 'Machine Learning');

map.forEach((key, value) => {
	console.log(`${key}: ${value}`);
});
