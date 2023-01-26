'''
You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
'''

class ListNode:
    def __init__(self, val = 0 ):
        self.val = val
        self.next = None


class Solution:
    #Optimal Solution Time Complexity O(n) Space complexity O(1)
    def deleteMiddle(self, head:Optional[ListNode]) -> Optional[ListNode]:
        #points the slow pointer to the  head
        slow = head
        #points the fast pointer to our head
        fast = head 
        #current pointer points to the head
        current = head
        #edge case, return 0 if the Listnode has only one node
        if current.next == None:
            return None
        #finds the middle of the listnode
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        #removes the element at the middle of the listnode
        while current:
            if current and current.next == slow:
                current.next = slow.next
            else:
                current = current.next
        #return the new list node
        return head

        #or
    def deleteMiddl1(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return None
        slow = head
        fast = head
        prev = None

        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next
        prev.next = slow.next
        return head


        
s = Solution()
print(s.deleteMiddle([1,3,4,7,1,2,6])) # Ouptut -> [1,3,4,1,2,6]
print(s.deleteMiddle([1,2,3,4])) # Ouptut -> [1,2,4]
print(s.deleteMiddle([1])) # Ouptut -> 0