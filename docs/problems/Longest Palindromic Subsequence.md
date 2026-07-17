---
date: 2024-08-15
difficulty: Medium
num: 516
related_topics:
  - Dynamic Programming
  - String
return: Review
---

# Problem: 516. Longest Palindromic Subsequence

## Description

## Approach / Thoughts
lcs with s and reversed s

## Solution
```python
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        t1, t2 = s, s[::-1]

        dp = {}
        def dfs(i, j):
            if i >= len(s) or j >= len(s):
                return 0
            if (i, j) in dp:
                return dp[(i, j)]

            if t1[i] == t2[j]:
                res = 1 + dfs(i+1, j+1)
            else:
                res = max(dfs(i+1, j), dfs(i, j+1))
            
            dp[(i, j)] = res
            return res
        return dfs(0, 0)
```
