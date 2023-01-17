def is_palindrome(input: str) -> bool:
    """
    Checks whether the input string is a valid palindrome
    A palindrome is a string that can be read from the back and from
    the front with similar spelling
    """

    left = 0
    right = len(input) - 1
    while left <= right:
        if input[left] != input[right]:
            return False
            break
        left += 1
        right -= 1
    return True
