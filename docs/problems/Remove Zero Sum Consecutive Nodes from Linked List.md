---
date: 2024-03-12
difficulty: Medium
num: 1171
related_topics:
  - Hash Table
  - Linked List
  - Prefix Sum
return: Done
---

# Problem: 1171. Remove Zero Sum Consecutive Nodes From Linked List

## Description
Delete consecutive subgroups of nodes that sum to 0

## Approach / Thoughts
Build a prefix sum hashtable

If there is a repeated prefix for example between node 2 and 5 it means everything in between sums to 0

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeZeroSumSublists(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        prefixes = {0: dummy}

        cur = head
        pre = 0
        while cur:
            pre += cur.val
            prefixes[pre] = cur
            cur = cur.next

        cur = dummy
        pre = 0
        while cur:
            pre += cur.val
            cur.next = prefixes[pre].next
            cur = cur.next

        return dummy.next 
```
