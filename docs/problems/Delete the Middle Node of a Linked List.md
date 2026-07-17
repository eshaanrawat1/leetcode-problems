---
date: 2024-04-08
difficulty: Medium
num: 2095
related_topics:
  - Linked List
  - Two-Pointer
return: Done
---

# Problem: 2095. Delete The Middle Node Of A Linked List

## Description
Same as problem

## Approach / Thoughts
Fast and slow find middle node, reassign prev

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = dummy = ListNode(-1, head)
        slow, fast = head, head

        while fast and fast.next:
            prev = prev.next

            slow = slow.next
            fast = fast.next.next
        
        prev.next = prev.next.next
        return dummy.next
        
```
