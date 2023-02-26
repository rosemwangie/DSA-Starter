#creates a class representation of a node that contains the integer value, the left pointer and right pointer
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


#created an instance of the root of the binary tree initially set to none
class binary_tree:
    def _init__(self):
        self.root = None

#creates the nodes of the binary tree we are to create
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)

#arranges the binary tree manually with the pointers
node1.left = node2
node1.right = node3
node2.left = node4

#initializes the root of a binary tree to be node1
tree = binary_tree()
tree.root = node1

print(node1.right.data)