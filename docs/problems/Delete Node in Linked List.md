---
date: 2024-05-04
difficulty: Medium
num: 237
related_topics:
  - Linked List
return: Done
---

# Problem: 237. Delete Node In Linked List

## Description
simulate deletion of linked list

## Approach / Thoughts
copy over next node value and true delete next node

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        node.val = node.next.val
        node.next = node.next.next
```
