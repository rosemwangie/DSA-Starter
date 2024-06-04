var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
function inorderTraversal(root) {
    var res = [];
    var inorder = function (node) {
        if (!node)
            return;
        inorder(node.left);
        res.push(node.val);
        inorder(node.right);
    };
    inorder(root);
    return res;
}
// Test case 1
var tree1 = new TreeNode(1);
tree1.right = new TreeNode(2);
tree1.right.left = new TreeNode(3);
console.log(inorderTraversal(tree1)); // Output: [1, 3, 2]
// Test case 2
var tree2 = null;
console.log(inorderTraversal(tree2)); // Output: []
// Test case 3
var tree3 = new TreeNode(1);
console.log(inorderTraversal(tree3)); // Output: [1]
