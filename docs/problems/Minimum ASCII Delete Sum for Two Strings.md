---
date: 2026-01-12
difficulty: Medium
num: 712
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 712. Minimum Ascii Delete Sum For Two Strings

## Description

## Approach / Thoughts
cost of deletion prefix + dfs

## Solution
```python
class Solution:
    def minimumDeleteSum(self, s1: str, s2: str) -> int:
        m, n = len(s1), len(s2)

        def precomp(cost):
            N = len(cost)
            for i in range(N-2, -1, -1):
                cost[i] += cost[i+1]
            return cost

        c1 = precomp([ord(c) for c in s1])
        c2 = precomp([ord(c) for c in s2])

        @lru_cache(None)
        def dfs(i, j):
            if i >= m and j >= n:
                return 0
            if i >= m:
                return c2[j]
            if j >= n:
                return c1[i]

            if s1[i] == s2[j]:
                return dfs(i+1, j+1)

            return min(
                ord(s1[i]) + dfs(i+1, j),
                ord(s2[j]) + dfs(i, j+1)
            )

        return dfs(0, 0)
        
```
