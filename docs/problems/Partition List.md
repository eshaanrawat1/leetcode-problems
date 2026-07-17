---
date: 2024-06-26
difficulty: Medium
num: 86
related_topics:
  - Linked List
  - Two-Pointer
return: Done
---

# Problem: 86. Partition List

## Description
partition list so less than x then greater than x

## Approach / Thoughts
store in buckets, reconstruct with l and r pointer

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        left = dummy_left = ListNode(-1)
        right = dummy_right = ListNode(-1)

        cur = head
        while cur:
            if cur.val < x:
                left.next = cur
                left = left.next
            else:
                right.next = cur
                right = right.next
            cur = cur.next
        right.next = None
        
        left.next = dummy_right.next
        return dummy_left.next
```
