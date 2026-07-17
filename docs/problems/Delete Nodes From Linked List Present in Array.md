---
date: 2024-09-05
difficulty: Medium
num: 3217
related_topics:
  - Array
  - Hash Table
  - Linked List
return: Done
---

# Problem: 3217. Delete Nodes From Linked List Present In Array

## Description

## Approach / Thoughts
two pointers, skip values

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def modifiedList(self, nums: List[int], head: Optional[ListNode]) -> Optional[ListNode]:
        nums = set(nums)

        dummy = ListNode(-1, head)
        prev, cur = dummy, head

        while cur:

            while cur and cur.val in nums:
                cur = cur.next

            prev.next = cur
            prev = prev.next
            cur = cur.next if cur else None
        return dummy.next
```
