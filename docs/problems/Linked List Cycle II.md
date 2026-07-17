---
date: 2023-10-18
difficulty: Medium
num: 142
related_topics:
  - Hash Table
  - Linked List
  - Two-Pointer
return: Review
---

# Problem: 142. Linked List Cycle Ii

## Description
Given a linked list determine if there is a cycle.

If there is a cycle, find the node where the cycle begins and return it.

If there isn’t a cycle return None.

## Approach / Thoughts
My approach was pretty standard and it was to use a hashset. If the node was not in the set, then I would add it and continue iterating. If it was, then that means there is a cycle and you return that node.

Otherwise, you can wait until iteration finishes and return None.

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:

        current = head

        visited_nodes = set()

        while current:
            if current in visited_nodes:
                return current
            visited_nodes.add(current)
            current = current.next
        return None
```
