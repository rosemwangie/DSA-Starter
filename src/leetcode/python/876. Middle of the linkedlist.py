'''
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

'''

class ListNode:
    def __init__(self, val=0):
        self.val = val
        self.next = None


class Solution:
    #Optimal Solution1 -> Time Complexity O(n) Space complexity O(1)
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        #points to head
        slow = head
        fast = head
        #as long the head is not null and there is a next Node
        while fast and fast.next:
            #moves one node after
            slow = slow.next
            #moves two nodes ahead
            fast = fast.next.next
        #return the element at the slow node
        return slow


    #Optimal Solution2 -> Time Complexity  O(n) Space Complexity 0(1)
    def middleNode1(self, head: Optional[ListNode]) -> Optional[ListNode]:
        #prefix sum to keep count of our nodes
        count = 0 
        #sets the current pointer to our head
        current = head

        #loop as long as current is not None
        while current:
            #increment count by 1
            count +=1
            #move current to the next node
            current = current.next
        
        #find the middle of our count
        middle = count // 2
        #set the current back to our head
        current = head

        for i in range(middle):
            current = current.next
        return current


s = Solution()
print(s.middleNode([1,2,3,4,5])) #Output -> [3,4,5]
print(s.middleNode([1,2,3,4,5,6])) #Output -> [4,5,6]
