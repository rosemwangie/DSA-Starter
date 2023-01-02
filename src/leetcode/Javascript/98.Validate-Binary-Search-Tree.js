/**
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @param {number} lowerBound
 * @param {number} upperBound
 * @return {boolean}
 */
const isValidBST = (root) => {
  // Call the helper function with the root node and the minimum and maximum possible values for a BST
  return isValidBSTHelper(root, -Infinity, Infinity);
    
};
const isValidBSTHelper = (node, lowerBound, upperBound) =>  {
  // If the current node is null, it is a valid BST
  if (!node) return true;
  
  // If the value of the current node is less than the lower bound or greater than the upper bound, it is not a valid BST
  if (node.val <= lowerBound || node.val >= upperBound) return false;
  
  // Check the left and right subtrees recursively
  // For the left subtree, the upper bound is the value of the current node
  // For the right subtree, the lower bound is the value of the current node
  return isValidBSTHelper(node.left, lowerBound, node.val) && isValidBSTHelper(node.right, node.val, upperBound);
}

console.log(isValid([2,1,3])) //true
console.log(isValid([5,1,4,null,null,3,6])) //false
console.log(isValid([])) //false

/**
 * The time complexity of this solution is O(n), where n is the number of nodes in the tree. 
 * This is because the function visits each node exactly once.
 */