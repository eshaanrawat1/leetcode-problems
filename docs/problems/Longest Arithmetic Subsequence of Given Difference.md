---
date: 2025-01-07
difficulty: Medium
num: 1218
related_topics:
  - Array
  - Dynamic Programming
  - Hash Table
  - String Matching
return: Done
---

# Problem: 1218. Longest Arithmetic Subsequence Of Given Difference

## Description

## Approach / Thoughts
counting with dp, check if x - diff is in dp

dp[x] is longest sequence ending at x

## Solution
```python
class Solution:
    def longestSubsequence(self, arr: List[int], diff: int) -> int:
        res, n = 1, len(arr)
        dp = Counter()

        for i, x in enumerate(arr):
            if x - diff in dp:
                res = max(res, 1 + dp[x - diff])
            dp[x] = 1 + dp[x - diff]
        return res
```
