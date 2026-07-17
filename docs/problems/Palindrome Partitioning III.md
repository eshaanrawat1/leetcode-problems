---
date: 2025-06-17
difficulty: Hard
num: 1278
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 1278. Palindrome Partitioning Iii

## Description

## Approach / Thoughts
dp change characters

## Solution
```python
class Solution:
    def palindromePartition(self, s: str, k: int) -> int:

        n = len(s)

        def palindrome_match(s):
            if not s:
                return inf
                
            l, r = 0, len(s)-1
            flips = 0

            while l < r:
                if s[l] != s[r]:
                    flips += 1
                l += 1
                r -= 1
            return flips


        @lru_cache(None)
        def dfs(i, k):
            if i >= n and k > 0:
                return inf
            if k == 0:
                return palindrome_match(s[i:])

            res = inf
            for j in range(i, n):
                sub = s[i:j+1]
                res = min(res, palindrome_match(sub) + dfs(j+1, k-1))
            return res

        return dfs(0, k-1)
```
