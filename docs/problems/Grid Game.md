---
date: 2024-06-22
difficulty: Medium
num: 2017
related_topics:
  - Array
  - Matrix
  - Prefix Sum
return: Done
---

# Problem: 2017. Grid Game

## Description
find max path sum for robot 1 and then robot 2

## Approach / Thoughts
prefix sum, break into two streaks, minimize the max of them

## Solution
```python
class Solution:
    def gridGame(self, grid: List[List[int]]) -> int:
        for i in range(1, len(grid[0])):
            grid[0][i] += grid[0][i-1]
        
        for i in range(len(grid[1])-2,-1,-1):
            grid[1][i] += grid[1][i+1]

        res = float("inf")
        prefix, postfix = grid[0][-1], grid[1][0]

        for i in range(len(grid[0])):
            pr = prefix - grid[0][i]
            po = postfix - grid[1][i]
            res = min(res, max(pr, po))
        return res
```
