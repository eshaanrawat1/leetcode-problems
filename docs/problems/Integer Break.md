---
date: 2024-07-02
difficulty: Medium
num: 343
related_topics:
  - Dynamic Programming
  - Math
return: Done
---

# Problem: 343. Integer Break

## Description
break integer

## Approach / Thoughts
check combinations and cache, keep track of parts

## Solution
```python
class Solution:
    def integerBreak(self, n: int) -> int:
        dp = {1: 1}
        def dfs(n, parts):
            if n <= 1:
                return 1
            if n in dp:
                return dp[n]
            
            res = 0
            for i in range(1, n):
                res = max(res, dfs(i, parts+1) * dfs(n-i, parts+1))
            if n > res and parts > 1:
                res = n

            dp[n] = max(res, n)
            return res
        return dfs(n, 1)
```
