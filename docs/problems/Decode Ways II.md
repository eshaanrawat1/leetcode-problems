---
date: 2024-11-04
difficulty: Hard
num: 639
related_topics:
  - Dynamic Programming
  - String
return: Review
---

# Problem: 639. Decode Ways Ii

## Description
same with wildcard match

## Approach / Thoughts
go from back to front

## Solution
```python
class Solution:
    def numDecodings(self, s: str) -> int:
        mod = 10 ** 9 + 7

        @lru_cache(None)
        def dfs(i):
            if i < 0:
                return 1

            if s[i] == '*':
                vals = {"1": 9, "2": 6, "*": 15}
                res = 9 * dfs(i - 1)
                if i > 0:
                    res += vals.get(s[i-1], 0) * dfs(i - 2)
                return res % mod

            res = dfs(i - 1) if s[i] != '0' else 0
            if '10' <= s[i-1 : i+1] <= '26':
                res += dfs(i - 2)
            if i > 0 and s[i-1] == '*':
                res += (2 if s[i] <= '6' else 1) * dfs(i - 2)

            return res % mod

        return dfs(len(s)-1) % mod
```
