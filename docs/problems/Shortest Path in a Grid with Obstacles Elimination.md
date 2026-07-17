---
date: 2024-11-27
difficulty: Hard
num: 1293
related_topics:
  - Array
  - BFS
  - Matrix
return: Done
---

# Problem: 1293. Shortest Path In A Grid With Obstacles Elimination

## Description

## Approach / Thoughts
multi dim bfs keep track of obstacles

## Solution
```python
class Solution:
    def shortestPath(self, grid: List[List[int]], k: int) -> int:
        m, n = len(grid), len(grid[0])

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n

        visit = {(0, 0, 0)}
        q = deque([[0, 0, 0, 0]])

        while q:
            r, c, steps, o = q.popleft()
            
            if (r, c) == (m - 1, n - 1):
                return steps

            for nr, nc in [[r-1, c], [r+1, c], [r, c-1], [r, c+1]]:
                if in_bounds(nr, nc):
                    new_o = o + 1 if grid[nr][nc] else o
                    if new_o <= k and (nr, nc, new_o) not in visit:
                        visit.add((nr, nc, new_o))
                        q.append([nr, nc, steps + 1, new_o])
        return -1
        
```
