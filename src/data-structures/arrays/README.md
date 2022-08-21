# Arrays

## To have in your back pocket

    1. Clarify if there are duplicate values in the array and would it affect the answer
    2. When using an index to iterate make sure to consider nums. Length - 1
    3. Be mindful about slicing or concatenating arrays that’s an O(n) T

## Corner Cases

    1. Empty Sequence
    2. Sequence with 1 or 2 elements
    3. Sequence with repeated elements
    4. Duplicated values in the sequence // could be scattered

## Techniques

    1. Sliding Window
        The two pointers (L,R) —> usually move in the same direction will never overtake each other  O(n)

    2. Two Pointers
        A general version of sliding window where pointers can cross each other and can be on different arrays. eg; merge sorted arrays

    3. Traversing from the right
        sometimes you can traverse the array from the right

    4. Sorting the array
        If the array is sorted, some form of binary search should be possible which is O(log n)

    5. Precomputation
        For queries where sum or * of subarray is involved, pre-computing usinf hashing or prefix/suffix sum, might be useful.  Check prefix-sum tags on  leetcode

    6. Index has a hash key
        If a you are given a sequence and the query needs O(1) Space, it might be possible to use the array itself as a hash table. eg; if the array only has values from 1 to N, where N is the length of the array, negate the value at that index(-1) to indicate presence of the num.

    5. Traversing the array more than once
        Traversing the array twice/thrice is still O(n) example is two for loops

## References
