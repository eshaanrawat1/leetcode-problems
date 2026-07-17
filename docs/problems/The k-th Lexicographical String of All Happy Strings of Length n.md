---
date: 2026-03-13
difficulty: Medium
num: 1415
related_topics:
  - Staff
  - String
  - Backtracking
return: Review
---

# Problem:  

## Description
A **happy string** is a string that:

- consists only of letters of the set `['a', 'b', 'c']`.
- `s[i] != s[i + 1]` for all values of `i` from `1` to `s.length - 1` (string is 1-indexed).

For example, strings **"abc", "ac", "b"** and **"abcbabcbcb"** are all happy strings and strings **"aa", "baa"** and **"ababbc"** are not happy strings.

Given two integers `n` and `k`, consider a list of all happy strings of length `n` sorted in lexicographical order.

Return _the kth string_ of this list or return an **empty string** if there are less than `k` happy strings of length `n`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
backtrack sort
check out more optimal solution of walking path of blocks (similar to kth grammar type)

## Solution
```python
class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        res = []

        def dfs(i, cur):
            if i >= n:
                res.append(cur)
                return 
            
            for c in 'abc':
                if (not cur) or (c != cur[-1]):
                    dfs(i+1, cur+c)
        
        dfs(0, "")
        res.sort()
        return res[k-1] if k-1 < len(res) else ""