'''
Given the head of a singly linked list, reverse the list, and return the reversed list.

'''
#Definition of singly linked list
# class Node:
#     def __init__(self, val=0, next= None):
#         self.val = val
#         self.next = next
class Solution:
    #Optimal sln Time Complexity O(n) Space Complexity O(1)
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        #sets the previous node to None
        prev = None
        #sets the current pointer to the head
        current = self.head
        #as long as current is not None
        while current:
            #stores the next node temporarily
            next_node = current.next
            #sets the pointer of the next node to the previous node
            current.next = prev
            #sets the previous node to be our current node
            prev = current
            #updates the current node to be the next node
            current = next_node
        return prev


s = Solution()
print(s.reverseList([1,2,3,4,5])) #Output -> [5,4,3,2,1]
print(s.reverseList([1,2])) # Output -> [2,1]
print(s.reverseList([])) #Output -> []