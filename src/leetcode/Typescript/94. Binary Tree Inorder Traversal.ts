class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }
  
  function inorderTraversal(root: TreeNode | null): number[] {
    let res: Array<number> = [];
  
    const inorder = (node: TreeNode | null) => {
      if (!node) return;
  
      inorder(node.left);
      res.push(node.val);
      inorder(node.right);
    };
    inorder(root);
  
    return res;
  }
  
  // Test case 1
  let tree1 = new TreeNode(1);
  tree1.right = new TreeNode(2);
  tree1.right.left = new TreeNode(3);
  console.log(inorderTraversal(tree1)); // Output: [1, 3, 2]
  
  // Test case 2
  let tree2: TreeNode | null = null;
  console.log(inorderTraversal(tree2)); // Output: []
  
  // Test case 3
  let tree3 = new TreeNode(1);
  console.log(inorderTraversal(tree3)); // Output: [1]
  