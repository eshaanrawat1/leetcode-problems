---
date: 2024-11-28
difficulty: Medium
num: 3341
related_topics:
  - Array
  - Dynamic Programming
  - Heap (Priority Queue)
  - Matrix
  - Shortest Path
return: Done
---

# Problem: 3341. Find Minimum Time To Reach Last Room I

## Description

## Approach / Thoughts
dijkstra

## Solution
```python
class Solution:
    def minTimeToReach(self, moveTime: List[List[int]]) -> int:
        m, n = len(moveTime), len(moveTime[0])

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n

        pq = [[0, 0, 0]]
        shortest = {(0, 0): 0}

        while pq:
            t, r, c = heapq.heappop(pq)

            if (r, c) == (m - 1, n - 1):
                return t
            
            for nr, nc in [[r-1, c], [r+1, c], [r, c-1], [r, c+1]]:
                if in_bounds(nr, nc) and (nr, nc) not in shortest:
                    new_t = max(t, moveTime[nr][nc]) + 1
                    heapq.heappush(pq, [new_t, nr, nc])
                    shortest[(nr, nc)] = new_t
```
