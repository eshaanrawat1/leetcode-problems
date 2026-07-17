---
date: 2024-09-18
difficulty: Medium
num: 3290
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 3290. Maximum Multiplication Score

## Description

## Approach / Thoughts
dp for each option take skip

## Solution
```python
class Solution:
    def maxScore(self, a: List[int], b: List[int]) -> int:
        dp = [['A'] * len(b) for _ in range(4)]

        def dfs(i, j):
            if i >= 4:
                return 0
            if j >= len(b):
                return float("-inf")
            
            if dp[i][j] != 'A':
                return dp[i][j]

            take = a[i] * b[j] + dfs(i + 1, j + 1)
            skip = dfs(i, j + 1)

            dp[i][j] = max(take, skip)
            return max(take, skip)

        return dfs(0, 0)
```
