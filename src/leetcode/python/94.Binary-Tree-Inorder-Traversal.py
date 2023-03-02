'''
Given the root of a binary tree, return the inorder traversal of its nodes' values.
'''

class TreeNode:
    def __init__(self, val):
        self.left = None
        self.val = val
        self.right = None 


class Solution:
    #using recursion
    #Optimal sln: Time complexity O(n) Space Complexity O(n)
    def inOrderTraversal(self, root: optional[TreeNode])->List[int]:
        #base case
        if root == None:
            return []
        
        results = []
        #returns a list of all the left nodes in order
        results += self.inOrderTraversal(root.left)
        #add the root node to the middle of the list
        results += [root.val]
        #returns a list of all the right nodes in order
        results += self.inOrderTraversal(self.right)
        
    #using stacks
    #optimal sln: Time complexity O(n) Space Complexity O(n)
    def inorderTraversal(self, root: optional[ListNode]) -> List[int]:
        #base case
        if root is None:
            return []
        stack = [] 
        results = []
        current = root
        while current is not None or len(stack) > 0:
            while current is not None:
                stack.append(current)
                current = current.left
            current = stack.pop()
            results.append(current.val)
            current = current.right
        return results


s = Solution()
print(s.inorderTraversal( [1,None,2,3])) #Output -> [1,3,2]
print(s.inorderTraversal( [])) #Output-> []
print(s.inorderTraversal( [1])) #Output-> [1]