from binary_search import binary_search


def test_correct_index_found():
    arr = [1, 2, 3, 4, 5]
    assert 2 == binary_search(arr=arr, target=3)


def test_target_not_in_array():
    arr = [1, 2, 3, 4, 5]
    assert -1 == binary_search(arr=arr, target=10)
