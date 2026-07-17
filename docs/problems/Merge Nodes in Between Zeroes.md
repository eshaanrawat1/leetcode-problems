---
date: 2024-07-03
difficulty: Medium
num: 2181
related_topics:
  - Linked List
  - Simulation
return: Done
---

# Problem: 2181. Merge Nodes In Between Zeroes

## Description

## Approach / Thoughts
create new list

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        zeroes = []
        values = []
        cur, i = head, 0
        while cur:
            if cur.val == 0:
                zeroes.append(i)
            values.append(cur.val)
            cur = cur.next
            i += 1

        res = []
        for i in range(1, len(zeroes)):
            start = zeroes[i-1]
            end = zeroes[i]

            cur_sum = 0
            for j in range(start, end):
                cur_sum += values[j]
            res.append(cur_sum)

        dummy = ListNode(-1)
        cur = dummy

        for n in res:
            tmp = ListNode(n)
            cur.next = tmp
            cur = cur.next
        return dummy.next
```
