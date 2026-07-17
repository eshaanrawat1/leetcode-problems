---
date: 2026-04-26
difficulty: Medium
num: 1559
related_topics:
  - Array
  - DFS
  - BFS
  - Union Find
  - Matrix
return:
---

# Problem:  

## Description
Given a 2D array of characters `grid` of size `m x n`, you need to find if there exists any cycle consisting of the **same value** in `grid`.

A cycle is a path of **length 4 or more** in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the **same value** of the current cell.

Also, you cannot move to the cell that you visited in your last move. For example, the cycle `(1, 1) -> (1, 2) -> (1, 1)` is invalid because from `(1, 2)` we visited `(1, 1)` which was the last visited cell.

Return `true` if any cycle of the same value exists in `grid`, otherwise, return `false`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
cycle detection, track parents

## Solution
```python
class Solution:
    def containsCycle(self, grid: List[List[str]]) -> bool:
        m, n = len(grid), len(grid[0])

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n


        vis = set()

        def dfs(r, c, pr, pc):
            v = grid[r][c]

            res = False
            for nr, nc in [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]:
                if (nr, nc) == (pr, pc):
                    continue

                if in_bounds(nr, nc) and grid[nr][nc] == v:
                    if (nr, nc) in vis:
                        return True

                    vis.add((nr, nc))
                    res = res or dfs(nr, nc, r, c)
            return res 


        for i in range(m):
            for j in range(n):
                if (i, j) not in vis:
                    if dfs(i, j, -1, -1):
                        return True
        return False
