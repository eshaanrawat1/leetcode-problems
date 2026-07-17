---
date: 2024-09-13
difficulty: Hard
num: 1269
related_topics:
  - Dynamic Programming
return: Done
---

# Problem: 1269. Number Of Ways To Stay In The Same Place After Some Steps

## Description

## Approach / Thoughts
2d dp of num steps and position + memo

## Solution
```python
class Solution:
    def numWays(self, steps: int, arrLen: int) -> int:

        @cache
        def dfs(cnt, pos):
            if cnt == steps and pos == 0:
                return 1
            if cnt == steps:
                return 0
            if pos < 0 or pos >= arrLen:
                return 0

            left = dfs(cnt + 1, pos - 1)
            right = dfs(cnt + 1, pos + 1)
            stay = dfs(cnt + 1, pos)

            return left + right + stay

        return dfs(0, 0) % (10 ** 9 + 7)
```
