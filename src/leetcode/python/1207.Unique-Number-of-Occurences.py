def uniqueOccurrences(self, arr: List[int]) -> bool:
    """
    Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.
    """
    # dictionary to store the sum of each element in the array
    sum = {}

    # first iterate through the array to find the sum of each element in the array
    for i in range(len(arr)):
        if arr[i] not in sum:
            sum[arr[i]] = 1
        else:
            sum[arr[i]] += 1
    # for the second half, now iterate the sum dictionary to check for duplicates
    unique = []

    for _, value in sum.items():
        if value in unique:
            return False
        else:
            unique.append(value)

    return True
