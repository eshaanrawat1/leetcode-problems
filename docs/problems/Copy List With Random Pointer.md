---
date: 2024-04-20
difficulty: Medium
num: 138
related_topics:
  - Hash Table
  - Linked List
return: Review
---

# Problem: 138. Copy List With Random Pointer

## Description
Make deep copy of list with random pointer and next

## Approach / Thoughts
Copy over all nodes into hashtable [original: copy]

Use dict to assign next and random, return head

## Solution
```python
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        oldCopy = {None: None}

        # store copy as a value to the original
        cur = head
        while cur:
            copy = Node(cur.val)
            oldCopy[cur] = copy
            cur = cur.next

        # access copy use it to set next and random to copy nodes
        cur = head
        while cur:
            copy = oldCopy[cur]
            copy.next = oldCopy[cur.next]
            copy.random = oldCopy[cur.random]
            cur = cur.next

        return oldCopy[head]
```
