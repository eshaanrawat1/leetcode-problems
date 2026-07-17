---
date: 2024-06-16
difficulty: Medium
num: 417
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
return: Done
---

# Problem: 417. Pacific Atlantic Water Flow

## Description
find cell which can go to pac and atl

## Approach / Thoughts
dfs from the ocean find intersections

## Solution
```python
class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        ROWS, COLS = len(heights), len(heights[0])

        pacific, atlantic = set(), set()
        def dfs(r, c, visit, prev):
            if r < 0 or c < 0 or r >= ROWS or c >= COLS:
                return 
            if (r, c) in visit or heights[r][c] < prev:
                return 

            visit.add((r, c))
            dfs(r+1, c, visit, heights[r][c])
            dfs(r-1, c, visit, heights[r][c])
            dfs(r, c+1, visit, heights[r][c])
            dfs(r, c-1, visit, heights[r][c])

        for r in range(ROWS):
            dfs(r, 0, pacific, 0)
            dfs(r, COLS-1, atlantic, 0)
        
        for c in range(COLS):
            dfs(0, c, pacific, 0)
            dfs(ROWS-1, c, atlantic, 0)

        res = []
        ans = pacific & atlantic
        for pair in ans:
            res.append([pair[0], pair[1]])
        return res
```
