//Implementing a binary tree

//create a BinaryTree class that has a root property
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//create a Node class that represents a node in the binary tree
// binary tree class has a constructor that initializes the root property to null
class BinaryTree {
  constructor() {
    this.root = null;
  }
}


//With the BinaryTree and Node classes, you can use them to create a binary tree and add nodes to it
const tree = new BinaryTree();

// create some nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

// arrange the nodes in a binary tree
node1.left = node2;
node1.right = node3;
node2.left = node4;

// set the root of the binary tree
tree.root = node1;

//You can continue to add more nodes to the binary tree by setting the left and right properties of existing nodes
const node5 = new Node(5);
node2.right = node5;
