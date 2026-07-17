---
date: 2024-05-19
difficulty: Medium
num: 24
related_topics:
  - Linked List
  - Recursion
return: Done
---

# Problem: 24. Swap Nodes In Pairs

## Description
swap adjacent nodes

## Approach / Thoughts
keep track of all pointers and do swaps

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(-1, head)

        prev = dummy
        first = head 
        second = head.next if head else None

        while prev and first and second:
            first.next = second.next
            second.next = first
            prev.next = second

            prev = first
            first = prev.next
            second = first.next if first else None
        
        return dummy.next
```
