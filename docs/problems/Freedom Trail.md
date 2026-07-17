---
date: 2024-04-27
difficulty: Hard
num: 514
related_topics:
  - BFS
  - DFS
  - Dynamic Programming
  - String
return: Review
---

# Problem: 514. Freedom Trail

## Description
dp with string checks

## Approach / Thoughts
recursive solution

## Solution
```python
class Solution:
    def findRotateSteps(self, ring: str, key: str) -> int:
        cache = {}
        def dfs(r, k):
            if k == len(key):
                return 0
            if (r, k) in cache:
                return cache[(r,k)]

            res = float("inf")

            for i, c in enumerate(ring):
                if c == key[k]:
                    dist = min(abs(r-i), len(ring)-abs(r-i))
                    res = min(res, dist + 1 + dfs(i, k+1))
            cache[(r,k)] = res
            return res
        return dfs(0, 0)
```
