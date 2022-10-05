from os import link
from linked_list import LinkedList, Node


def test_creation():
    linkedList = LinkedList()

    assert linkedList.get_size() == 0
    linkedList.prepend(1)
    assert linkedList.get_size() == 1
    first = linkedList.get_by_index(0)
    assert first.value == 1

    linkedList.insert_bulk(values=[2, 3, 4])
    assert linkedList.get_size() == 4

    third = linkedList.get_by_index(2)
    assert third.value == 3

    assert linkedList.search(4) == True

    linkedList.insert_at(10, 1)
    insert_at = linkedList.get_by_index(1)
    assert insert_at.value == 10
