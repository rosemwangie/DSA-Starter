/**
 * Implementing a Binary Search Tree
 */

/**
 * Create a Node class that will represent a node in the binary search tree
 * The node class contains the value of the node, and the pointer to the left and right child nodes.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Create a BinarySearchTree class that will represent the binary search tree itself.
 */

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Code for inserting a node into the tree goes here
   * @param {*} value
   */
  insert(value) {
    // Create a new node
    const newNode = new Node(value);

    // Special case: if the tree is empty, set the root node to the new node
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    // Start at the root node
    let currentNode = this.root;

    // Loop until we find the correct position for the new node
    while (true) {
      // If the new node's value is less than the current node's value, go left
      if (value < currentNode.value) {
        // If there's no left child, insert the new node here
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        // Otherwise, update the current node to be the left child
        currentNode = currentNode.left;
      } else {
        // If the new node's value is greater than or equal to the current node's value, go right
        // If there's no right child, insert the new node here
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        // Otherwise, update the current node to be the right child
        currentNode = currentNode.right;
      }
    }
  }

  /**
   *
   * @param {*} value
   * // Code for searching the tree for a specific value goes here
   */
  search(value) {}

  /**
   * Code for removing a node from the tree goes here
   * @param {*} value
   */
  remove(value) {
    // first, find the node to be removed
    let node = this.find(value);
    if (!node) return null; // value not found

    // get the parent node
    let parent = node.parent;

    // case 1: node is a leaf node
    if (!node.left && !node.right) {
      if (parent) {
        // remove the node from the parent's children
        parent.removeChild(node);
      } else {
        // if the node has no parent, it must be the root node
        // in which case, we simply set the root to null
        this.root = null;
      }
    }

    // case 2: node has one child
    else if (!node.left || !node.right) {
      let child = node.left || node.right;
      if (parent) {
        // replace the node with its child
        parent.replaceChild(node, child);
      } else {
        // if the node has no parent, it must be the root node
        // in which case, we simply set the root to the child node
        this.root = child;
      }
    }

    // case 3: node has two children
    else {
      // find the successor node (i.e., the minimum value in the right subtree)
      let successor = node.right.min();
      if (node.right !== successor) {
        // if the successor node is not a direct child of the node to be removed,
        // we must remove it from its current position and replace it with its own child (if any)
        successor.parent.removeChild(successor);
        successor.left = node.left;
        successor.left.parent = successor;
      }

      // replace the node with its successor
      if (parent) {
        parent.replaceChild(node, successor);
      } else {
        this.root = successor;
      }
    }
    return node;
  }
}

const bst = new BinarySearchTree();
bst.insert();
bst.insert();
bst.insert();
bst.search();
bst.remove();

console.log(bst);
