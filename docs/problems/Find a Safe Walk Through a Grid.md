---
date: 2026-07-01
difficulty: Medium
num: 3286
related_topics:
  - Array
  - Breadth-First Search
  - Graph Theory
  - Heap (Priority Queue)
  - Matrix
  - Shortest Path
return:
---

# Problem: 3286. Find a Safe Walk Through a Grid

## Description
You are given an `m x n` binary matrix `grid` and an integer `health`.

You start on the upper-left corner `(0, 0)` and would like to get to the lower-right corner `(m - 1, n - 1)`.

You can move up, down, left, or right from one cell to another adjacent cell as long as your health *remains* **positive**.

Cells `(i, j)` with `grid[i][j] = 1` are considered **unsafe** and reduce your health by 1.

Return `true` if you can reach the final cell with a health value of 1 or more, and `false` otherwise.

## Approach / Thoughts
use 01 bfs - better to consider all 0 cells first before 1 cells

## Solution
```python
class Solution:
    def findSafeWalk(self, grid: List[List[int]], health: int) -> bool:
        m, n = len(grid), len(grid[0])

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n
        
        q = deque([[0, 0, health - grid[0][0]]])
        vis = {(0, 0)}

        while q:
            r, c, h = q.popleft()

            if (r, c) == (m-1, n-1):
                if h > 0:
                    return True

            for nr, nc in [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]:
                if in_bounds(nr, nc) and (nr, nc) not in vis:
                    if grid[nr][nc] == 1:
                        q.append((nr, nc, h-1))
                    else:
                        q.appendleft((nr, nc, h))
                    vis.add((nr, nc))
        return False
```