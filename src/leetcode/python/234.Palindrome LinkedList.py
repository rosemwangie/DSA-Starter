'''
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
'''

# class ListNode:
#     def __init__(self, val=0):
#         self.val = val 
#         self.next = None 

class Solution:
    #Optimal sln1-Use stacks Time complexity O(n) Space Complexity O(n)
    def isPalindrome(self, head:Optional[ListNode]) -> bool:
        stack = []
        current = head
        while current:
            stack.append(current.val)
            current = current.next
        current = head
        while current:
            if current.val != stack.pop():
                return False
            current = current.next
        return True

    
    #Optimal Sln2- Reverse half of the linked list Time Complexity O(n) Space Complexity O(1)
    def isPalindrome1(self, head:Optional[ListNode]) -> bool:
        #finds the middle of the linked list
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        #reverses the second part of the linked list
        prev = None
        while slow:
            temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp
        #compares the values of the first and second halves of the linked list
        first = head
        second = prev
        while second:
            if first.val != second.val:
                return False
            first = first.next
            second = second.next
        return True


s = Solution()
print(s.isPalindrome([1,2,2,1]))    #Output- True
print(s.isPalindrome([1,2]))       #Output - False
