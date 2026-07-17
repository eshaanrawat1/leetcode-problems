---
date: 2024-08-11
difficulty: Hard
num: 1568
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
  - Strongly Connected Component
return: Done
---

# Problem: 1568. Minimum Number Of Days To Disconnect Island

## Description

## Approach / Thoughts
need at most 2 days

find examples where we need 0 or 1

## Solution
```python
class Solution:
    def minDays(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        visit = set()
        def dfs(r, c):
            if r < 0 or c < 0 or r >= ROWS or c >= COLS:
                return 0
            if (r, c) in visit or grid[r][c] == 0:
                return 0

            visit.add((r, c))
            return 1 + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1)

        count = ones = 0
        for r in range(ROWS):
            for c in range(COLS):   
                if dfs(r, c):
                    count += 1
                if grid[r][c]:
                    ones += 1
        if count > 1 or ones == 0:
            return 0
        if ones == 1:
            return 1

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c]:
                    visit.clear()
                    cnt = 0
                    grid[r][c] = 0

                    for i in range(ROWS):
                        for j in range(COLS):
                            if dfs(i, j):
                                cnt += 1

                    grid[r][c] = 1
                    if cnt > 1:
                        return 1

        return 2
```
