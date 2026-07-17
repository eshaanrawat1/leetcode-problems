---
date: 2024-12-06
difficulty: Medium
num: 2327
related_topics:
  - Dynamic Programming
  - Queue
  - Simulation
return: Review
---

# Problem: 2327. Number Of People Aware Of A Secret

## Description

## Approach / Thoughts
dp keep track of forgets

## Solution
```python
class Solution:
    def peopleAwareOfSecret(self, n: int, delay: int, forget: int) -> int:
        dp = [0] * 1001
        dp[1] = 1

        for d in range(1, n+1):
            for nxt in range(d + delay, min(d + forget, 1001)):
                dp[nxt] += dp[d]

        res = 0
        for d in range(1, n+1):
            if d + forget > n:
                res += dp[d]
        return res % (10 ** 9 + 7)
```
