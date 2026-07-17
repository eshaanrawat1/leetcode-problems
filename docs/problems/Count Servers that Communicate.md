---
date: 2025-01-22
difficulty: Medium
num: 1267
related_topics:
  - Array
  - BFS
  - Counting
  - DFS
  - Matrix
  - Union Find
return: Done
---

# Problem: 1267. Count Servers That Communicate

## Description

## Approach / Thoughts
count row and col

## Solution
```python
class Solution:
    def countServers(self, grid: List[List[int]]) -> int:
        rows = Counter()
        cols = Counter()

        m, n = len(grid), len(grid[0])

        for i in range(m):
            for j in range(n):
                if grid[i][j]:
                    rows[i] += 1
                    cols[j] += 1

        cnt = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j]:
                    if rows[i] > 1 or cols[j] > 1:
                        cnt += 1
        return cnt
```
