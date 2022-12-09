//Implementing a binary tree

// create a node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// binary tree class has a constructor that initializes the root property to null
class BinaryTree {
  constructor() {
    this.root = null;
  }
}

// create a binary tree
const tree = new BinaryTree();

// create some nodes
const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);

// arrange the nodes in a binary tree
n1.left = n2;
n1.right = n3;
n2.left = n4;

// set the root of the binary tree
tree.root = n1;

const n5 = new Node(5);
n2.right = n5;
