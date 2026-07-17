---
date: 2025-01-24
difficulty: Medium
num: 2002
related_topics:
  - Backtracking
  - Bit Manipulation
  - Bitmask
  - Dynamic Programming
  - String
return: Done
---

# Problem: 2002. Maximum Product Of The Length Of Two Palindromic Subsequences

## Description

## Approach / Thoughts
bitmask dp

## Solution
```python
class Solution:
    def maxProduct(self, s: str) -> int:
        n = len(s)

        def dfs(i, cur_str, seen, cnt):
            if i == n:
                if (cur_str == cur_str[::-1] and cnt == 0):
                    return len(cur_str) * dfs(0, '', seen, cnt + 1)
                if (cur_str == cur_str[::-1] and cnt == 1):
                    return len(cur_str)
                return 0

            res = dfs(i + 1, cur_str, seen, cnt)
            if not ((1 << i) & seen):
                res = max(res, dfs(i + 1, cur_str + s[i], seen | (1 << i), cnt))

            return res

        return dfs(0, '', 1 << 12, 0)
```
