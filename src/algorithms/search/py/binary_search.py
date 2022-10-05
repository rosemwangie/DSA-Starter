def binary_search(arr: list[int], target: int) -> int:
    """
    Given an array of integers find the index of the target
    if not available return -1
    This algorithm only works on sorted arrays,
    one will adjust accordingly whether the array is sorted in
    ascending or descending order
    """

    left = 0
    right = len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        # here we have to compare the element at the mid position
        # in comparison to our target value.
        # Three situations arise:
        # 1. The value at mid is greater than the target which means we should
        # search the left side of the array
        # 2. The value at mid is less than the target which means we should
        # search the right side of the array
        # 3. The value is equal to our target which means we have obtained our match

        # 1. value is larger than target
        if arr[mid] > target:
            right = mid - 1
        # value is less than target
        elif arr[mid] < target:
            left = mid + 1
        else:
            # we have found our match
            return mid

    return -1
