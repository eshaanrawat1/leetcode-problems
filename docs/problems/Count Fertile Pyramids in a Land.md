---
date: 2026-02-23
difficulty: Hard
num: 2088
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
  - Senior Staff
return: Done
---

# Problem: 2088. Count Fertile Pyramids In A Land

## Description
same, pyramid

## Approach / Thoughts
dp, similar to number of perfect squares

## Solution
```python
class Solution:
    def countPyramids(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        def calc(arr):
            dp = [[0] * n for _ in range(m)]
            for i in range(m-2, -1, -1):
                for j in range(n-2, 0, -1):
                    if arr[i][j]:
                        if arr[i+1][j-1] and arr[i+1][j] and arr[i+1][j+1]:
                            dp[i][j] = 1 + min(dp[i+1][j-1], dp[i+1][j], dp[i+1][j+1])
            return sum(sum(row) for row in dp)

        rev = [row[::-1] for row in grid][::-1]
        return calc(grid) + calc(rev)
```
