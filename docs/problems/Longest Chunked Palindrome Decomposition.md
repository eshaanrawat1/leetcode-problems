---
date: 2026-02-08
difficulty: Hard
num: 1147
related_topics:
  - Dynamic Programming
  - Greedy
  - Hash Function
  - Principal
  - Rolling Hash
  - String
  - Two-Pointer
return: Done
---

# Problem: 1147. Longest Chunked Palindrome Decomposition

## Description

## Approach / Thoughts
greedy smallest prefix

## Solution
```python
class Solution:
    def longestDecomposition(self, s: str) -> int:
        n = len(s)

        @lru_cache(None)
        def dfs(i, j):
            if i == j:
                return 1
            if i > j:
                return 0

            ii, jj = i, j

            cur = ''
            while ii < jj:
                cur += s[ii]
                if s[i:j+1].endswith(cur):
                    return 2 + dfs(ii+1, jj-1)
                ii += 1
                jj -= 1
            return 1
        return dfs(0, n-1)
```
