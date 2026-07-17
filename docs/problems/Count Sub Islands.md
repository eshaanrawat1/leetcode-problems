---
date: 2024-06-14
difficulty: Medium
num: 1905
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
  - Union Find
return: Done
---

# Problem: 1905. Count Sub Islands

## Description

## Approach / Thoughts
keep track of whether part of island is not in island and count based on that

## Solution
```python
class Solution:
    def countSubIslands(self, grid1: List[List[int]], grid2: List[List[int]]) -> int:
        M, N = len(grid2), len(grid2[0])
        def dfs(r, c):
            if r < 0 or c < 0 or r == M or c == N:
                return
            if grid2[r][c] != 1:
                return 
            
            if grid1[r][c] == 0:
                self.check = False
            
            grid2[r][c] = '#'

            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r, c+1)
            dfs(r, c-1)
        
        count = 0
        self.check = False
        for r in range(M):
            for c in range(N):
                if grid2[r][c] == 1:
                    self.check = True
                    dfs(r, c)
                if self.check:
                    count += 1
                self.check = False
        return count
```
