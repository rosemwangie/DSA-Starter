/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // base case: if the root is null, there is no tree to invert
  if (!root) {
    return null;
  }

  // invert the left and right subtrees
  let left = invertTree(root.left);
  let right = invertTree(root.right);

  // swap the left and right subtrees
  root.left = right;
  root.right = left;

  // return the root node of the inverted tree
  return root;
};

console.log(invertTree([4, 2, 7, 1, 3, 6, 9])); //Outputs: [4,7,2,9,6,3,1]
console.log(invertTree([2, 1, 3])); //Outputs: [2,3,1]
console.log(invertTree([])); //Outputs: []
