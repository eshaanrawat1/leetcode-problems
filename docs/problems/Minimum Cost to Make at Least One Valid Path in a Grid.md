---
date: 2024-11-29
difficulty: Hard
num: 1368
related_topics:
  - Array
  - BFS
  - Graph
  - Heap (Priority Queue)
  - Matrix
  - Shortest Path
return: Done
---

# Problem: 1368. Minimum Cost To Make At Least One Valid Path In A Grid

## Description

## Approach / Thoughts
dijkstra with cost

## Solution
```python
class Solution:
    def minCost(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        directions = [0, (0, 1), (0, -1), (1, 0), (-1, 0)]
        pq = [[0, 0, 0]]

        shortest = [[float('inf')] * n for _ in range(m)]
        shortest[0][0] = 0

        while pq:
            cost, r, c = heapq.heappop(pq)

            if (r, c) == (m - 1, n - 1):
                return cost

            for dr, dc in [[0, 1], [0, -1], [1, 0], [-1, 0]]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n:
                    new_c = cost if directions[grid[r][c]] == (dr, dc) else cost + 1
                    if new_c < shortest[nr][nc]:
                        shortest[nr][nc] = new_c
                        heapq.heappush(pq, [new_c, nr, nc])
```
