<h1 align='center'>BINARY TREE</h1>
A binary tree is a tree in which every internal node has a maximum of two children.
A node in a binary tree has 3 main parts, the left pointer, the right pointer and the node value.

Example of a tree node in javaScript.
```jsx
/*
A node class containing a node value, left pointer and right pointer
*/
class Node() {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
```

<h3>Types of binary Trees</h3>
<h5>Based on the number of children</h5>

- Full Binary Tree- Refers to a binary tree where each  internal node must have 2 child nodes each. 
- Pathological Binary Tree/Degenerate- Refers to a binary tree where the internal nodes only have one child node either on the left or right.
- Skewed Binary Tree- Similar to a pathological node but the tree is either dominated by the left nodes or the right nodes.


<h5>Based on Completion of levels</h5>

- Complete Binary Tree- Refers to a binary tree where each node is completely filled, except for a last level node, the children of the last level node that is not filled has its child node aligned to the left.
- Perfect Binary Tree- Refers to a binary tree where each node is completely filled and all leaf nodes are at the same level.
- Balanced Binary Tree- Refers to a node where the difference in the height of the left subtree and the right subtree is equal to 0.
