---
date: 2024-11-28
difficulty: Hard
num: 2577
related_topics:
  - Array
  - BFS
  - Graph
  - Heap (Priority Queue)
  - Matrix
  - Shortest Path
return: Review
---

# Problem: 2577. Minimum Time To Visit A Cell In A Grid

## Description

## Approach / Thoughts
dijsktra account for wait time

## Solution
```python
class Solution:
    def minimumTime(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        if grid[0][1] > 1 and grid[1][0] > 1:
            return -1

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n

        visit = {(0, 0)}
        pq = [[0, 0, 0]]

        while pq:
            t, r, c = heapq.heappop(pq)
            if (r, c) == (m - 1, n - 1):
                return t
            
            for nr, nc in [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]:
                if in_bounds(nr, nc) and (nr, nc) not in visit:
                    visit.add((nr, nc))
                    wait = (grid[nr][nc] - t) % 2 == 0
                    heapq.heappush(pq, (max(grid[nr][nc] + wait, t + 1), nr, nc))
    
```
