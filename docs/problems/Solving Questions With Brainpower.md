---
date: 2024-07-08
difficulty: Medium
num: 2140
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 2140. Solving Questions With Brainpower

## Description
choose which questions to take in order

## Approach / Thoughts
simple memo

## Solution
```python
class Solution:
    def mostPoints(self, questions: List[List[int]]) -> int:
        dp = {}
        def dfs(i):
            if i >= len(questions):
                return 0
            if i in dp:
                return dp[i]

            pts, bp = questions[i]

            res = 0
            res = max(pts + dfs(i+bp+1),
                      dfs(i+1))

            dp[i] = res
            return res
        return dfs(0)
```
