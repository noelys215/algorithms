class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					//Left
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					//Right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}
	lookup(value) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		while (currentNode) {
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				return currentNode;
			}
		}
		return null;
	}
	remove(value) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		let parentNode = null;
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				//We have a match, get to work!

				//Option 1: No right child:
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						//if parent > current value, make current left child a child of parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left;

							//if parent < current value, make left child a right child of parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.left;
						}
					}

					//Option 2: Right child which doesnt have a left child
				} else if (currentNode.right.left === null) {
					currentNode.right.left = currentNode.left;
					if (parentNode === null) {
						this.root = currentNode.right;
					} else {
						//if parent > current, make right child of the left the parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right;

							//if parent < current, make right child a right child of the parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}

					//Option 3: Right child that has a left child
				} else {
					//find the Right child's left most child
					let leftmost = currentNode.right.left;
					let leftmostParent = currentNode.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}

					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right;
					leftmost.left = currentNode.left;
					leftmost.right = currentNode.right;

					if (parentNode === null) {
						this.root = leftmost;
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftmost;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftmost;
						}
					}
				}
				return true;
			}
		}
	}
	BFS() {
		let currentNode = this.root;
		let list = [];
		// Keeps Track of current level
		let queue = [];
		// Add current node to queue
		queue.push(currentNode);

		while (queue.length > 0) {
			// Takes first item in queue and makes it current node
			currentNode = queue.shift();
			// console.log(currentNode.value);
			// Adds current node value to list array
			list.push(currentNode.value);
			// Does current node have a left child?
			if (currentNode.left) {
				// If so, push it to queue
				queue.push(currentNode.left);
			}
			// Does Current node have a right child?
			if (currentNode.right) {
				// If so, push it to queue
				queue.push(currentNode.right);
			}
		}
		console.log(list);
		return list;
	}
	BFSRecursive(queue, list) {
		// If theres no items left in queue, return list
		if (!queue.length) return list;
		// Takes first item in queue and makes it current node
		let currentNode = queue.shift();
		// Adds current node value to list array
		list.push(currentNode.value);
		// Does current node have a left child?
		if (currentNode.left) {
			// If so, push it to queue
			queue.push(currentNode.left);
		}
		// Does Current node have a right child?
		if (currentNode.right) {
			// If so, push it to queue
			queue.push(currentNode.right);
		}
		return this.BFSRecursive(queue, list);
	}

	DFSInOrder() {
		return traverseInOrder(this.root, []);
	}

	DFSPostOrder() {
		return traversePostOrder(this.root, []);
	}

	DFSPreOrder() {
		return traversePreOrder(this.root, []);
	}
}

function traverseInOrder(node, list) {
	// Does Node have a left child
	if (node.left) {
		// If so, traverse down using recursion
		traverseInOrder(node.left, list);
	}
	// When you end up at bottommost node; push it to list
	list.push(node.value);
	// Does Node have a right child
	if (node.right) {
		// If so, traverse down using recursion
		traverseInOrder(node.right, list);
	}
	return list;
}

function traversePreOrder(node, list) {
	// Push node to beginning/Start with parent node first
	list.push(node.value);
	// Does Node have a left child
	if (node.left) {
		// If so, traverse down using recursion
		traversePreOrder(node.left, list);
	}
	// Does Node have a right child
	if (node.right) {
		// If so, traverse down using recursion
		traversePreOrder(node.right, list);
	}
	return list;
}

function traversePostOrder(node, list) {
	// Does Node have a left child
	if (node.left) {
		// If so, traverse down using recursion
		traversePostOrder(node.left, list);
	}
	// Does Node have a right child
	if (node.right) {
		// If so, traverse down using recursion
		traversePostOrder(node.right, list);
	}
	// Push parent node to end
	list.push(node.value);
	return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.remove(170);
JSON.stringify(traverse(tree.root));
/* tree.BFS();
tree.BFSRecursive([tree.root], []); */
tree.DFSInOrder();

//     9
//  4     20
//1  6  15  170

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}

// LeetCode #98

/* const isValidBST = function (root) {
	function recursive(root, min, max) {
		// Base Case, does root exist/ // We hit the end of the path
		if (!root) return true;
		// current node's val doesn't satisfy the BST rules
		if (root.val >= max || root.val <= min) return false;
		// Continue to scan left and right
		return recursive(root.left, min, root.val) && recursive(root.right, root.val, max);
	}
	return recursive(root, -Infinity, Infinity);
};

function isValidBST(root, min = -Infinity, max = Infinity) {
	if (!root) return true;
	return (
		!(root.val <= min || root.val >= max) &&
		isValidBST(root.left, min, root.val) &&
		isValidBST(root.right, root.val, max)
	);
}
 */
