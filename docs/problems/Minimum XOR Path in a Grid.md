---
date: 2026-04-16
difficulty: Medium
num: 3882
related_topics:
  - Array
  - Dynamic Programming
  - Bit Manipulation
  - Matrix
return:
---

# Problem:  

## Description
You are given a 2D integer array `grid` of size `m * n`.

You start at the **top-left** cell `(0, 0)` and want to reach the **bottom-right** cell `(m - 1, n - 1)`.

At each step, you **may** move either **right or down**.

The **cost** of a path is defined as the **bitwise XOR** of all the values in the cells along that path, **including** the start and end cells.

Return the **minimum** possible XOR value among all valid paths from `(0, 0)` to `(m - 1, n - 1)`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
dp xor restriction cache it

## Solution
```python
class Solution:
    def minCost(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n

        self.res = inf
        dp = [[[-1] * 1025 for _ in range(n)] for _ in range(m)]
        
        def dfs(r, c, xor):
            if (r, c) == (m-1, n-1):
                self.res = min(self.res, xor ^ grid[r][c])
                return self.res
            
            if dp[r][c][xor] != -1:
                return dp[r][c][xor]

            for nr, nc in [[r+1, c], [r, c+1]]:
                if in_bounds(nr, nc):
                    dfs(nr, nc, grid[r][c] ^ xor)
            dp[r][c][xor] = self.res
            return self.res
        return dfs(0, 0, 0)
                