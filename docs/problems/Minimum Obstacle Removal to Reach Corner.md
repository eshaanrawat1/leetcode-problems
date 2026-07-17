---
date: 2024-11-27
difficulty: Hard
num: 2290
related_topics:
  - Array
  - BFS
  - Dynamic Programming
  - Heap (Priority Queue)
  - Matrix
  - Shortest Path
return: Done
---

# Problem: 2290. Minimum Obstacle Removal To Reach Corner

## Description

## Approach / Thoughts
dijkstra

## Solution
```python
class Solution:
    def minimumObstacles(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n

        pq = [[0, 0, 0]]
        shortest = {}

        while pq:
            o, r, c = heapq.heappop(pq)

            if (r, c) in shortest:
                continue
            shortest[(r, c)] = o

            if (r, c) == (m - 1, n - 1):
                return o

            for nr, nc in [[r-1, c], [r+1, c], [r, c+1], [r, c-1]]:
                if in_bounds(nr, nc):
                    new_o = o + 1 if grid[nr][nc] else o
                    heapq.heappush(pq, [new_o, nr, nc])
```
