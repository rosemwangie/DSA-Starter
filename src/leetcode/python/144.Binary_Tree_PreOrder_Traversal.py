'''
Given the root of a binary tree, return the preorder traversal of its nodes' values.
'''

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class Solution:
    #using a stack
    #Optimal Sln: Time complexity O(n) Space Complexity O(n)
    def preorderTraversal(self, root: Optional[TreeNode])-> List[int]:
        #edge case, if the root has no value
        if root == None:
            return []
        
        #empty list to store final results
        results = []
        #initialize a stack with the root as its first element
        stack = [root]
        #as long as the stack is not empty
        while stack:
            #remove the top element of the stack
            node = stack.pop()
            #append the element to our result
            results.append(node.val)

            #LIFO, append the nodes to the stacks, the right node should always be at the bottom
            if node.right:
                stack.append(node.right)
            if node.left:
                stack.append(node.left)
        return results
    
    #using recursion
    def preorderTraversal1(self, root: optional[ListNosde])-> List[int]:
        if root == None:
            return []
        results = [root.val]
        results += self.preorderTraversal(root.left)
        results += self.preorderTraversal(root.right)
        return results

s = Solution()
print(s.preorderTraversal( [1,None,2,3])) #Output -> [1,2,3]
print(s.preorderTraversal( [])) #Output-> []
print(s.preorderTraversal( [1])) #Output-> [1]