class Node {
  // A node in an AVL tree has a key, a value, and a balance factor
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.balance = 0;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  // The AVL tree has a root node
  constructor() {
    this.root = null;
  }

  // A helper function to get the height of a node
  getHeight(node) {
    if (node === null) {
      return -1;
    }
    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // A helper function to get the balance factor of a node
  getBalance(node) {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // A helper function to perform a left rotation on a node
  leftRotate(node) {
    let rightChild = node.right;
    node.right = rightChild.left;
    rightChild.left = node;
    return rightChild;
  }

  // A helper function to perform a right rotation on a node
  rightRotate(node) {
    let leftChild = node.left;
    node.left = leftChild.right;
    leftChild.right = node;
    return leftChild;
  }

  // A function to insert a key-value pair into the AVL tree
  insert(key, value) {
    this.root = this.insertNode(this.root, key, value);
  }

  insertNode(node, key, value) {
    // If the node is null, create a new node with the key and value
    if (node === null) {
      return new Node(key, value);
    }

    // If the key is less than the node's key, insert it in the left subtree
    if (key < node.key) {
      node.left = this.insertNode(node.left, key, value);
    }
    // If the key is greater than the node's key, insert it in the right subtree
    else if (key > node.key) {
      node.right = this.insertNode(node.right, key, value);
    }
    // If the key is already in the tree, update the value
    else {
      node.value = value;
      return node;
    }
  }
}
