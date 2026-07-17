---
date: 2024-05-05
difficulty: Medium
num: 2487
related_topics:
  - Linked List
  - Monotonic Stack
  - Recursion
  - Stack
return: Done
---

# Problem: 2487. Remove Nodes From Linked List

## Description
delete all nodes with a node > than them to the right

## Approach / Thoughts
use monotonic stack to store kept nodes

iterate and change ptrs

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        stack = []

        cur = head
        while cur:
            while stack and cur.val > stack[-1].val:
                stack.pop()
            stack.append(cur)
            cur = cur.next

        prev = dummy = ListNode(-1, head)
        for node in stack:
            prev.next = node
            prev = node
        prev.next = None
        return dummy.next
```
