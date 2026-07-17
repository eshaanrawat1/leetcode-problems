---
date: 2024-07-02
difficulty: Medium
num: 1162
related_topics:
  - Array
  - BFS
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 1162. As Far From Land As Possible

## Description
find cell farthest from land

## Approach / Thoughts
multisource bfs with all lands

## Solution
```python
class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
        N = len(grid)
        q = deque([])

        water = land = 0
        for r in range(N):
            for c in range(N):
                if grid[r][c] == 1:
                    land += 1
                    q.append((r, c, 0))
                    grid[r][c] = '#'
                if grid[r][c] == 0:
                    water += 1

        if not water or not land:
            return -1

        def in_bounds(i, j):
            return i >= 0 and i < N and j >= 0 and j < N

        cur_max = 0
        while q:
            r, c, dist = q.popleft()
            cur_max = max(cur_max, dist)
            for i, j in [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]:
                if in_bounds(i, j) and grid[i][j] != '#':
                    q.append((i, j, dist+1))
                    grid[i][j] = '#'
        return cur_max
```
