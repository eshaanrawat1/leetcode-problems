---
date: 2023-12-01
difficulty: Medium
num: 19
related_topics:
  - Linked List
  - Two-Pointer
return: Done
---

# Problem: 19. Remove Nth Node From End Of List

## Description
Same as title

## Approach / Thoughts
Two passes

Pass 1 - find length of LL

Pass 2 - Initialize dummy node and set it to be before head. Iterate dummy one behind current. If index of current (position) is equal to count - n, previous which is dummy is set to current next.

Also make sure head is set to dummy next since we return the head

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        count, idx = 0, 0
        
        mover = head
        while mover:
            mover = mover.next
            count += 1
            
        dummy = ListNode(0)
        dummy.next = head
        current = head 
        head = dummy
        
        while current:
            if count - n == idx:
                dummy.next = current.next
                return head.next
            idx += 1
            dummy = current
            current = current.next
        return head.next
```
