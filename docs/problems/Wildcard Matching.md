---
date: 2025-01-02
difficulty: Hard
num: 44
related_topics:
  - Dynamic Programming
  - Greedy
  - Recursion
  - String
return: Done
---

# Problem: 44. Wildcard Matching

## Description

## Approach / Thoughts
reduce adjacent * and dp match

## Solution
```python
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        M, N = len(s), len(p)

        a = 0
        res = []
        while a < N:
            b = a
            while b < N and p[b] == '*':
                b += 1
            res.append(p[a])
            a = b + 1 if a == b else b
        p = ''.join(res)
        N = len(p)

        @lru_cache(None)
        def dfs(i, j):
            if i == M and j == N:
                return True
            if j == N-1 and p[j] == '*' :
                return True
            if i == M or j == N:
                return False

            if p[j] == '?' or s[i] == p[j]:
                return dfs(i + 1, j + 1)

            

            if p[j] == '*':
                for k in range(i, M):
                    if dfs(k, j + 1):
                        return True

            return False

        return dfs(0, 0)
```
