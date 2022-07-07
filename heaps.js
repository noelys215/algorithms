class MaxBinaryHeap {
	constructor() {
		this.values = [41, 39, 33, 18, 27, 12];
	}
	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}
	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex];
			if (element <= parent) break;
			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}

	extractMax() {
		let values = this.values;

		let max = values[0];

		// replace the max element with the most recently added element
		if (values.length === 0) return undefined;
		if (values.length === 1) values.pop();
		else values[0] = values.pop();

		// Indexes of parent and children elements
		let parent = 0;
		let left = 2 * parent + 1;
		let right = 2 * parent + 2;

		// restore the heap
		while (values[left] > values[parent] || values[right] > values[parent]) {
			if (values[left] > values[right]) {
				this._swap(values, left, parent);
				parent = left;
				left = 2 * parent + 1;
				right = 2 * parent + 2;
			}
			if (values[right] > values[left]) {
				this._swap(values, right, parent);
				parent = right;
				left = 2 * parent + 1;
				right = 2 * parent + 2;
			}
			// there is a left value but not a right
			if (values[left] && !values[right]) {
				this._swap(values, left, parent);
			}
			// there is a right value but not a left
			if (values[right] && !values[left]) {
				this._swap(values, right, parent);
			}
		}
		return max;
	}
}

let heap = new MaxBinaryHeap();
heap.insert(55);
