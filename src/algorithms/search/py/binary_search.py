'''
    A binary Search is a searching algorithm used in a sorted array 
    by repeatedly dividing the search interval in half.

    **The array must be sorted
    **Time Complexity of binary search is O(log n)
    **Space Complexity of binary search is O(1)
'''
def binary_search(arr: list[int], target: int) -> int:
    #Steps to achieve binary Search algorithm
    
    #1. Sort the array in ascending order if needed 

    #2. Assign the left pointer to the first element of the sorted array
    left = 0

    #3. Assign the right pointer to ther last element of the sorted array
    right = len(arr) - 1 
    
    #4. Loop through the array as long as the left pointer is less or equal to the right pointer.
    while left <= right:
    
    #5. Find the mid position of the array
        mid = (left + right) // 2

    #6. Compare the mid element with the target, return the mid position if true
        if arr[mid] == target:
            return mid

    #7. Compare the mid element with the target, decrement the right pointer if the mid element is greater than our target
        elif arr[mid] > target:
            right = mid - 1
    
    #8. Compare the mid element with the target, increment the left pointer by one if the mid element is less than our target
        else:
            left = mid + 1

    #9. Return -1 if None of our conditions is met (If the element is not in the array)
    return -1
