---
date: 2024-09-08
difficulty: Medium
num: 2326
related_topics:
  - Array
  - Linked List
  - Matrix
  - Simulation
return: Done
---

# Problem: 2326. Spiral Matrix Iv

## Description
fill spiral matrix from linked list

## Approach / Thoughts
roomba

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def spiralMatrix(self, m: int, n: int, head: Optional[ListNode]) -> List[List[int]]:
        def out_of_bounds(r, c):
            return r < 0 or c < 0 or r >= m or c >= n
        
        dx, dy = 0, 1

        res = [[-1] * n for _ in range(m)]
        visit = set()

        cur = head
        x = y = 0

        while cur:
           
            if out_of_bounds(x + dx, y + dy) or (x + dx, y + dy) in visit:
                dx, dy = dy, -dx

            res[x][y] = cur.val
            visit.add((x, y))

            x += dx
            y += dy
            cur = cur.next
        return res
```
