---
date: 2024-07-04
difficulty: Medium
num: 2058
related_topics:
  - Linked List
return: Done
---

# Problem: 2058. Find The Minimum And Maximum Number Of Nodes Between Critical Points

## Description

## Approach / Thoughts
store locals and find maxes

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        prev, cur, nxt = None, head, head.next

        i, local = 0, []
        while cur and cur.next:
            if prev and prev.val < cur.val and cur.val > nxt.val:
                local.append(i)
            if prev and prev.val > cur.val and nxt.val > cur.val:
                local.append(i)
            i += 1

            prev = cur
            cur = nxt
            nxt = nxt.next
        
        min_diff = float("inf")
        max_diff = float("inf")

        for i in range(1, len(local)):
            min_diff = min(min_diff, local[i] - local[i-1])
        
        if len(local) >= 2:
            max_diff = local[-1] - local[0]

        if min_diff == float("inf") or max_diff == float("inf"):
            return [-1,-1]
        return [min_diff, max_diff]
```
