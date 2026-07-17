---
date: 2024-08-31
difficulty: Hard
num: 23
related_topics:
  - Divide and Conquer
  - Heap (Priority Queue)
  - Linked List
  - Merge Sort
return: Done
---

# Problem: 23. Merge K Sorted Lists

## Description

## Approach / Thoughts
divide and conquer for a total of lgn merges

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if not lists:
            return None
        if len(lists) == 1:
            return lists[0]

        m = len(lists) // 2
        left = self.mergeKLists(lists[:m])
        right = self.mergeKLists(lists[m:])

        return self.merge(left, right)


    def merge(self, l, r):
        dummy = cur = ListNode(-1)

        while l and r:
            if l.val <= r.val:
                cur.next = l
                l = l.next
            else:
                cur.next = r
                r = r.next
            cur = cur.next
        
        cur.next = l or r
        return dummy.next
```
