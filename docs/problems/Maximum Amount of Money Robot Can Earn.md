---
date: 2025-01-13
difficulty: Medium
num: 3418
related_topics:
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 3418. Maximum Amount Of Money Robot Can Earn

## Description
same, skip 2 negatives

## Approach / Thoughts
3d dp top down

## Solution
```python
class Solution:
    def maximumAmount(self, coins: List[List[int]]) -> int:
        m, n = len(coins), len(coins[0])
        dp = [[[-inf] * 3 for _ in range(n)] for _ in range(m)]

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n

        def dfs(r, c, skips):
            if r == m - 1 and c == n - 1:
                return max(coins[r][c], 0) if skips < 2 else coins[r][c]

            if dp[r][c][skips] != -inf:
                return dp[r][c][skips]

            res, val = -inf, coins[r][c]
            
            lr, lc = r + 1, c
            rr, rc = r, c + 1

            for nr, nc in [[r+1, c], [r, c+1]]:
                if in_bounds(nr, nc):
                    if val < 0 and skips < 2:
                        res = max(res, dfs(nr, nc, skips + 1))
                    res = max(res, val + dfs(nr, nc, skips))
                
            dp[r][c][skips] = res
            return res

        return dfs(0, 0, 0)
```
