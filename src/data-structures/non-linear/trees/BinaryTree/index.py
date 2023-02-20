class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class binary_tree:
    def _init__(self):
        self.root = None

node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)

node1.left = node2
node1.right = node3
node2.left = node4

tree = binary_tree()
tree.root = node1

