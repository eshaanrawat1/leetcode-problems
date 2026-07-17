---
date: 2026-06-09
difficulty: Medium
num: 3955
related_topics:
  - 
return:
---

# Problem: 3955. Valid Binary Strings With Cost Limit

## Description
You are given two integers `n` and `k`.

The **cost** of a binary string `s` is defined as the sum of all indices `i` (0-based) such that `s[i] == '1'`.

A binary string is considered **valid** if:

	- It does not contain two consecutive `'1'` characters.

	- Its cost is **less than or equal** to `k`.

Return a list of all valid binary strings of length `n` in any order.

## Approach / Thoughts
[[Weekly Contest 505]]

brute force backtracking

## Solution
```python
class Solution:
    def generateValidStrings(self, n: int, k: int) -> list[str]:
        res = []

        def dfs(i, prev, cnt, sub):
            if i >= n:
                res.append(sub)
                return 

            dfs(i+1, '0', cnt, sub + '0')

            if prev != '1' and cnt+i <= k:
                dfs(i+1, '1', cnt+i, sub + '1')

        dfs(0, '', 0, '')
        return res
```