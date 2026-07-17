---
date: 2024-09-17
difficulty: Hard
num: 1866
related_topics:
  - Combinatorics
  - Dynamic Programming
  - Math
return: Review
---

# Problem: 1866. Number Of Ways To Rearrange Sticks With K Sticks Visible

## Description

## Approach / Thoughts
either put smallest at front so it is visible

anywhere else it is hidden

go on to subproblems

## Solution
```python
class Solution:
    def rearrangeSticks(self, n: int, k: int) -> int:
        dp = [[-1] * 1001 for _ in range(1001)]

        def dfs(n, k):
            if n == 0 or k == 0:
                return 0
            if n == k:
                return 1
            if dp[n][k] != -1:
                return dp[n][k]

            vis = dfs(n - 1, k - 1)
            hid = dfs(n - 1, k) * (n - 1)

            dp[n][k] = (hid + vis) % (10 ** 9 + 7)
            return (hid + vis) % (10 ** 9 + 7)

        return dfs(n, k) % (10 ** 9 + 7)
```
