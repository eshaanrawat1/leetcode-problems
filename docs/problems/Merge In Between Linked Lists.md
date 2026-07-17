---
date: 2024-03-22
difficulty: Medium
num: 1699
related_topics:
  - Linked List
return: Done
---

# Problem: 1699. Merge In Between Linked Lists

## Description
Merge a list in between a linked list

## Approach / Thoughts
Have pointers and use basic traversals

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
        pA, pB = list1, list1

        i = 0
        while pA and i < a-1:
            pA = pA.next
            i += 1

        j = 0
        while pB and j < b:
            pB = pB.next
            j += 1

        head2 = list2
        pA.next = list2

        while pA.next:
            pA = pA.next
        pA.next = pB.next

        return list1
```
