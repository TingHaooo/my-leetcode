# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        slow = head
        fast = head
        i = n
        try:
            while i:
                fast = fast.next
                i -= 1
        except:
            return None
        
        if not fast:
            return slow.next
        
        while True:
            if not fast.next:
                slow.next = slow.next.next
                break
            slow = slow.next
            fast = fast.next
        
        return head

            
