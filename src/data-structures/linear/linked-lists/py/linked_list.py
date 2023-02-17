from __future__ import annotations


class Node:
    next: Node = None
    value: any = None

    def __init__(self, value: any = None, next: Node = None) -> None:
        self.value = value
        self.next = next


class LinkedList:
    """
    Operations
    Traversal - access each element of the linked list
    Insertion - adds a new element to the linked list
    Deletion - removes the existing elements
    Search - find a node in the linked list
    Sort - sort the nodes of the linked list
    """

    head: Node = None
    value: any = None
    size: int = 0

    def __init__(self, value: any = None, next: Node = None):
        self.next = next
        self.value = value
        self.head = Node()
        self.size = 0

    def get_size(self) -> int:
        return self.size

    def prepend(self, value: any):
        """
        adds an item the beginning of the list
        """
        next = self.head.next
        node = Node(value, next)
        self.head.next = node
        self.size += 1

    def insert_bulk(self, values: list[value]):
        for v in values:
            self.insert(v)

    def insert(self, value: any):
        self._insert(Node(value))

    def _insert(self, node: Node):
        """
        adds an item to end of the list
        """
        current = self.head

        if current.next is None:
            current.next = node
        else:
            while current.next != None:
                current = current.next

            current.next = node
        self.size += 1

    def search(self, value: any) -> bool:
        """
        searches a linked list to check if a value exists
        """
        current = self.head

        while current is not None:
            if current.value == value:
                return True
            else:
                current = current.next

        return False

    def get_by_index(self, index: int) -> Node:
        """
        gets an item at the specified index
        """
        if index > self.size or index < 0:
            raise IndexError("Index out of bounds of list size")

        current = self.head.next
        count = 0
        while current:
            if count == index:
                return current
            count += 1
            current = current.next

        return None

    def insert_at(self, value: any, index: int) -> Node:
        if index < 0 or index > self.size:
            raise IndexError("Index out of bounds of List")

        current = self.head
        for i in range(index):
            current = current.next

        next = current.next
        node = Node(value=value, next=next)
        current.next = node

        return node

    def __iter__(self):

        return self

    def __next__(self):
        node = self.head

        if node:
            return node
