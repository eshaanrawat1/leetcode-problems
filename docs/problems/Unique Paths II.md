---
date: 2024-07-29
difficulty: Medium
num: 63
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 63. Unique Paths Ii

## Description
same, but avoid obstacles

## Approach / Thoughts
2d dp array, set obstacle paths to 0

## Solution
```python
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        ROWS, COLS = len(obstacleGrid), len(obstacleGrid[0])
        dp = [[0] * (COLS+1) for _ in range(ROWS+1)]
        dp[ROWS-1][COLS-1] = 1

        if obstacleGrid[ROWS-1][COLS-1] == 1:
            return 0

        for r in range(ROWS-1, -1, -1):
            for c in range(COLS-1, -1, -1):
                if obstacleGrid[r][c] == 1:
                    continue
                else:
                    dp[r][c] += dp[r+1][c] + dp[r][c+1]
        return dp[0][0]
```
