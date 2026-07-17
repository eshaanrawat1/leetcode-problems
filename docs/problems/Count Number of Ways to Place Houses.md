---
date: 2024-12-12
difficulty: Medium
num: 2320
related_topics:
  - Backtracking
  - Bit Manipulation
  - Combinatorics
  - DFS
  - Dynamic Programming
  - Math
  - Matrix
  - Memoization
  - Recursion
return: Done
---

# Problem: 2320. Count Number Of Ways To Place Houses

## Description
same, 2 plots

## Approach / Thoughts
plots are independent - fib take skip

## Solution
```python
class Solution:
    def countHousePlacements(self, n: int) -> int:
        dp = [-1] * n

        def dfs(i):
            if i >= n:
                return 1
            if dp[i] != -1:
                return dp[i]

            place = dfs(i + 2)
            skip = dfs(i + 1)

            dp[i] = place + skip
            return place + skip

        return dfs(0) * dfs(0) % (10 ** 9 + 7)
```
