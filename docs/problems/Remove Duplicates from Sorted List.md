---
date: 2023-10-29
difficulty: Easy
num: 83
related_topics:
  - Linked List
return: Done
---

# Problem: 83. Remove Duplicates From Sorted List

## Description
Remove duplicates from sorted LL

## Approach / Thoughts
The goal is to have two nested while loops. We start at the first node. Then in the nested while loop, we keep checking if the next node is a duplicate of the first. If it is, then we assign the next node to the next nearest non duplicate.

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:

        curr = head 

        while curr:
            while curr.next and curr.next.val == curr.val:
                curr.next = curr.next.next
            curr = curr.next

        return head
```
