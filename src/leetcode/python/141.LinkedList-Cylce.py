'''
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
'''

# class ListNode:
#     def __init__(self, data):
#         self.data = data
#         self.next = None
class Solution:
    #Optimal solution-Using two pointers 1 Time Complexity -> O(n) Space Complexity O(1)
    def hasCycle(self, head:Optional[ListNode]) -> bool:
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
            return False
    
    #Optimal solution2-Using a hashMap Time Complexity O(n) Space complexity O(1)
    def hasCycle1(self, head:Optional[ListNode]) -> bool:
        seen = {}
        current = head
        while current:
            if current in seen:
                return True
            seen[current] = current.next
            current = current.next
        return False

    #Alternative of a hashMap is use of sets(sets do not containe duplicates)
    def hasCycle(self, head:Optional[ListNode]) -> bool:
        seen = set()
        current = head
        while current:
            if current in seen:
                return True
            seen.add(current)
            current = current.next
        return False

s = Solution()
print(s.hasCycle([3,2,0,-4])) #pos=1 #Output- True
print(s.hasCycle([1,2])) #pos=0 #Output-   True
print(s.hasCycle([1])) #pos=-1 #Output- False