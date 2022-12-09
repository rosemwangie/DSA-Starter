# Trees
A **Tree** is composed of _nodes_. It's a data structure that consists of nodes connected by edges. Each node has a value and may have one or more child nodes, which are connected to the parent node by an edge. The root node is the topmost node in the tree and does not have a parent.

The **root** node is the starting point of the tree and branches off into other nodes. 

There are many different types of trees, including binary trees, B-trees, and balanced trees.

Each node can have one or more child nodes, which can in turn have their own children. 

This structure allows for efficient searching and sorting of data. All other nodes are connected to the root in some way. The nodes at the lowest level of the tree are called leaves. The nodes between the root and the leaves are called branches.

The tree data structure is an effective way to store and organize data. It allows for fast retrieval and manipulation of data, as well as efficient searching algorithms. Trees are commonly used to implement data structures such as binary search trees, heaps, and tries. Trees are also used in graph algorithms such as depth-first search and breadth-first search.

The root node is the ancestor of all other nodes in the tree, and all other nodes are descendants of the root node. The root node is also the topmost node in a tree.

The depth of the root node is 0.
The height of the root node is the height of the tree.

## Types of Trees

### **1. Binary Tree** 

**Binary Tree** is a tree in which each node has at most two children. This type of tree is commonly used to implement binary search algorithms.

**Binary tree conssist of pieces of data:**

  - The data or value stored in the node
  - A reference to the left child node
  - A reference to the right child node


### **2. Binary Search Tree**
A binary search tree is a data structure that is used to store data in a way that allows for efficient searching
A binary search tree (BST) is a type of self-balancing, binary tree in which each node stores an item of data and has two children. 
The left child of a node contains only values less than the node's value, while the right child contains only values greater than or equal to the node's value. 
The BST is widely used for data storage and retrieval due to its efficient search capabilities. 
It can be used in applications such as databases, sorting algorithms, and data compression.

## Operations

### **BST Insertion**

1. This is the process of inserting a new node into a tree.
2. Insertion begins at the root of the tree and compares the value of the new node with the value at the root. 
3. If the value of the new node is less than the value at the root, then the insertion process moves to the left subtree of the root.
4. If the value of the new node is greater than the value at the root, then the insertion process moves to the right subtree of the root.

(The insertion process continues until an appropriate location is found to insert the new node(recursion). Once the location is found, the new node is inserted and the tree is updated accordingly.)

## References
* [Medium Read](https://mariam-jaludi.medium.com/data-structures-trees-1bafa942cd60)
