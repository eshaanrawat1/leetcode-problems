---
date: 2024-08-25
difficulty: Hard
num: 25
related_topics:
  - Linked List
  - Recursion
return: Done
---

# Problem: 25. Reverse Nodes In K Group

## Description

## Approach / Thoughts
rearrange pointers

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = ListNode(-1, head)

        if k == 1:
            return dummy.next

        prev, start = dummy, head
        while start:
            end = start
            for _ in range(k-1):
                end = end.next if end else None
            
            if not end:
                return dummy.next

            nxt = end.next

            self.reverse(prev, start, end, nxt)

            prev, start = start, start.next if start else None

        return dummy.next


    def reverse(self, prev, start, end, nxt):
        p, cnt = start, 0

        while start != end:
            if cnt == 0:
                p = start
                
                tmp = start.next
                start.next = nxt
                start = tmp

                cnt = 1
            else:
                tmp = start.next
                start.next = p
                p = start
                start = tmp

        end.next = p
        prev.next = end
```
