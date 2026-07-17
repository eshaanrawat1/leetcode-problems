---
date: 2024-08-19
difficulty: Medium
num: 1140
related_topics:
  - Array
  - Dynamic Programming
  - Game Theory
  - Math
  - Prefix Sum
return: Review
---

# Problem: 1140. Stone Game Ii

## Description

## Approach / Thoughts
minmax for bob alice

## Solution
```python
class Solution:
    def stoneGameII(self, piles: List[int]) -> int:

        @cache
        def dfs(alice, i, M):
            if i >= len(piles):
                return 0

            res = 0 if alice else float("inf")
            total = 0
            for X in range(1, 2 * M + 1):
                if i + X - 1 >= len(piles):
                    break
                total += piles[i + X - 1]

                if alice:
                    res = max(res, total + dfs(not alice, i + X, max(M, X)))
                else:
                    res = min(res, dfs(not alice, i + X, max(M, X)))
                
            return res
        return dfs(True, 0, 1)
```
