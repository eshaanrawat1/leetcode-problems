---
date: 2025-07-14
difficulty: Easy
num: 1290
related_topics:
  - Linked List
  - Math
return: Done
---

# Problem: 1290. Convert Binary Number In A Linked List To Integer

## Description

## Approach / Thoughts
bit shift each digit

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getDecimalValue(self, head: Optional[ListNode]) -> int:
        x = 0

        cur = head
        while cur:
            x = (x << 1) | (cur.val)
            cur = cur.next
        return x
```
